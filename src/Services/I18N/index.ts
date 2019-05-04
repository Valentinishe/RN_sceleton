import config from '@config/config';
import enJson from '@config/i18n/en.json';
import ruJson from '@config/i18n/ru.json';
import { LocaleType } from '@Types/models/tools/I18N';
import { get } from 'lodash';
import reactNativeI18n from 'react-native-i18n';

const { EN, RU } = config.LOCALES;

reactNativeI18n.fallbacks = true;
reactNativeI18n.missingBehaviour = 'guess';
reactNativeI18n.defaultLocale = config.defaultLocale;
reactNativeI18n.locale = config.defaultLocale;

reactNativeI18n.translations = {
  [EN]:enJson,
  [RU]:ruJson,
};

reactNativeI18n.setLocale = (locale: LocaleType)  => {
  reactNativeI18n.locale = locale;
};

reactNativeI18n.locales.constants = {
  EN,
  RU,
};

export const getI18N = (path, def = '')  =>
  get(reactNativeI18n.translations[reactNativeI18n.locale], path, def);

export default reactNativeI18n;
