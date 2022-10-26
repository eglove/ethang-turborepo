import { environmentVariablesDevelopment } from './environment-variables-development';
import { environmentVariablesProduction } from './environment-variables-production';

export const getConst = (
  key: keyof typeof environmentVariablesDevelopment,
  environment = process.env['NODE_ENV']
): string => {
  const constants =
    environment === 'development'
      ? environmentVariablesDevelopment
      : environmentVariablesProduction;

  const value = constants[key];

  if (value === undefined) {
    throw new Error(`Constant ${key} not found.`);
  }

  return value;
};
