export type GetPropertiesData<DataType> = {
  props: {
    data: DataType;
  };
  revalidate: number;
};
