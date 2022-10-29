import type { ButtonHTMLAttributes } from 'react';
import { toCapitalizedWords } from 'util-typescript';

type ButtonConfig = {
  buttonText?: string;
  name: string;
  properties?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export const simpleFormButtons = (
  configs: ButtonConfig[]
): SimpleFormButton[] => {
  return configs.map(config => {
    return new SimpleFormButton(config);
  });
};

export class SimpleFormButton {
  public buttonText: string;
  public name: string;
  public properties?: ButtonHTMLAttributes<HTMLButtonElement>;

  constructor(config: ButtonConfig) {
    this.buttonText = config.buttonText ?? toCapitalizedWords(config.name);
    this.name = config.name;
    this.properties = config.properties;
  }
}
