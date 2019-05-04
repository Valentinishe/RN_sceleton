import config from '@config/config';

const MAX_NUMBERS = 8;

export function isRequired(value: any): boolean {
  return Boolean(value);
}

export const isText = (value: any): boolean => {
  return typeof(value) === 'string';
};

export const isNumber = (value: any): boolean => {
  return typeof(+value) === 'number';
};
