// change name

import config from '@config/config';

export type LocaleType = typeof config.LOCALES.EN | typeof config.LOCALES.RU;
export type getTranslate = (path: string) => { string: string; } | string;

export interface IInternationalization {
  getTranslate: getTranslate;
}
