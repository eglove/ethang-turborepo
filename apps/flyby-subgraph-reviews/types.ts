export type GraphQlReturn<DataField> = {
  code: number;
  message: 'success' | 'failure';
  success: boolean;
} & DataField;
