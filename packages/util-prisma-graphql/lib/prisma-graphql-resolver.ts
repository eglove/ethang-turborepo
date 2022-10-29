import { PrismaSelect } from '@paljs/plugins';
import type { DMMF } from '@prisma/generator-helper';
import type { GraphQLResolveInfo } from 'graphql/type';
import { arrayHasDuplicate } from 'util-typescript';

export type RelationInfo = {
  parentCallingFunction?: string;
  parentColumnName: string;
  parentTableName: string;
  relationColumnName: string;
  relationIndexName?: string;
};

export type ResolvedArguments<SelectT> = {
  rejectOnNotFound?: boolean | ((error: Error) => Error);
  select?: SelectT;
  where?: Record<string, unknown>;
};

type ResolveParentParameters<ParametersT> = {
  client: any;
  dmmfs: DMMF.Document[];
  info: GraphQLResolveInfo;
  parameters: ParametersT;
  parent?: Record<string, unknown>;
  relationInfo?: RelationInfo[];
};

type PrismaClient<ParametersT, ModelType = unknown> = Record<
  string,
  {
    findMany: (arguments_: ParametersT) => Promise<ModelType>;
    findUnique: (arguments_: ParametersT) => Promise<ModelType>;
  }
>;

export class PrismaGraphqlResolver<
  ParametersT extends ResolvedArguments<SelectT>,
  SelectT
> {
  client: PrismaClient<ParametersT>;
  dmmfs: DMMF.Document[];
  info: GraphQLResolveInfo;
  _modelName?: string;
  parameters: ParametersT;
  parent?: Record<string, unknown>;
  relationInfo?: RelationInfo[];
  ignoreSelect: boolean;

  resolvedArguments: ParametersT;

  constructor(
    parameters: ResolveParentParameters<ParametersT>,
    ignoreSelect?: boolean
  ) {
    this.client = parameters.client as PrismaClient<ParametersT>;
    this.dmmfs = parameters.dmmfs;
    this.info = parameters.info;
    this.parameters = parameters.parameters;
    this.parent = parameters.parent;
    this.relationInfo = parameters.relationInfo;
    this.ignoreSelect = ignoreSelect ?? false;

    this.resolvedArguments = this.resolveArguments();
  }

  async findMany<ModelType>(modelName: string): Promise<ModelType[]> {
    this.modelName = modelName;

    if (this.relationInfo) {
      for (const relation of this.relationInfo) {
        if (relation.parentTableName === this.info.parentType.name) {
          this.modelName = relation.parentTableName;

          const model = this.client[this.modelName];
          const relationValue = this.parent?.[relation.parentColumnName];

          if (typeof relationValue === 'undefined') {
            throw new TypeError(
              `Must call ${relation.parentColumnName} from ${relation.parentTableName}`
            );
          }

          // Try parentTable.findUnique().childTable()
          // https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance#solving-the-n1-problem
          try {
            delete this.resolvedArguments.where?.[relation.relationColumnName];

            return (
              // @ts-expect-error ignore for now
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              model
                // @ts-expect-error ignore for now
                .findUnique({
                  where: { [relation.parentColumnName]: relationValue },
                })
                [
                  typeof relation.relationIndexName === 'undefined'
                    ? this.modelName
                    : relation.relationIndexName
                ]({
                  ...this.resolvedArguments,
                }) as ModelType[]
            );
          } catch {
            console.error(
              `Make sure ${relation.parentTableName} has a foreign key constraint on ${this.modelName}.`
            );

            // @ts-expect-error This value was deleted above, readd
            this.resolvedArguments.where[relation.relationColumnName] =
              relationValue;
          }
        }
      }
    }

    return this.client?.[modelName].findMany({
      ...this.resolvedArguments,
    }) as unknown as ModelType[];
  }

  async findUnique<ModelType>(modelName: string): Promise<ModelType> {
    this.throwOnInvalidRelationship();
    this.modelName = modelName;

    return this.client?.[this.modelName].findUnique(
      this.resolvedArguments
    ) as ModelType;
  }

  resolveArguments(): ParametersT {
    let resolvedArguments = this.parameters;
    resolvedArguments.select = this.select();

    const getResolvedArguments = (relation: RelationInfo): ParametersT => {
      return {
        ...resolvedArguments,
        ...this.parameters,
        where: {
          [relation.relationColumnName]:
            this.parent?.[relation.parentColumnName],
          ...this.parameters.where,
        },
      };
    };

    if (this.relationInfo && this.parent) {
      for (const relation of this.relationInfo) {
        if (this.info.parentType.name === relation.parentTableName) {
          if (typeof this.parent?.[relation.parentColumnName] === 'undefined') {
            throw new TypeError(
              `Must call ${relation.parentColumnName} from ${relation.parentTableName}`
            );
          }

          if (
            typeof relation.parentCallingFunction === 'string' &&
            this.info.fieldName === relation.parentCallingFunction
          ) {
            resolvedArguments = getResolvedArguments(relation);
          }

          if (typeof relation.parentCallingFunction !== 'string') {
            resolvedArguments = getResolvedArguments(relation);
          }
        }
      }
    }

    return resolvedArguments;
  }

  select<SelectT>(): SelectT | undefined {
    if (this.ignoreSelect) {
      return;
    }

    const { select: prismaSelect } = new PrismaSelect(this.info, {
      dmmf: this.dmmfs,
    }).value as {
      select: SelectT;
    };

    return prismaSelect;
  }

  throwOnInvalidRelationship(): void {
    if (this.relationInfo && this.parent) {
      const indexArray = this.relationInfo.map(info => {
        if (typeof info.parentCallingFunction !== 'undefined') {
          return `${info.parentTableName}${info.parentCallingFunction}`;
        }

        return info.parentTableName;
      });

      if (arrayHasDuplicate(indexArray)) {
        const error = new Error(
          'If there are more than one relationships for a table, specify a calling function.'
        );
        console.error(error.message);
        throw error;
      }
    }
  }

  get modelName(): string | undefined {
    return this._modelName;
  }

  set modelName(modelName: string | undefined) {
    if (typeof modelName === 'undefined') {
      this._modelName = undefined;
      return;
    }

    this._modelName = `${modelName.charAt(0).toLowerCase()}${modelName.slice(
      1
    )}`;
  }
}
