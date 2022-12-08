import { type Rule } from 'sanity';

export const isRequired = (rule: Rule): Rule => {
  return rule.required();
};

export const slugify = (input: string): string => {
  return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
};
