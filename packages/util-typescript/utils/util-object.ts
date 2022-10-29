export const immutableSet = <ObjectType, ValueType>(
  object: ObjectType,
  key: keyof ObjectType,
  value: ValueType
): ObjectType => {
  object = {
    ...object,
    [key]: value,
  };
  return object;
};

export const parseAs = <Type>(object: Object): Type => {
  return JSON.parse(JSON.stringify(object)) as Type;
};
