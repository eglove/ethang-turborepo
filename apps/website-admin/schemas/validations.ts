export const isRequired = (Rule: { required: () => true }): true => {
  return Rule.required();
};

export const slugify = (input: string): string => {
  return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
};
