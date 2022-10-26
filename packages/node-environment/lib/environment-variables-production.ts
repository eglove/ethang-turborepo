import { environmentVariablesDevelopment } from './environment-variables-development';

export const environmentVariablesProduction: typeof environmentVariablesDevelopment =
  {
    ...environmentVariablesDevelopment,
    MODE: 'production',
  };
