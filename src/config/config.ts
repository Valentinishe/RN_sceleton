import { EN, RU } from '@config/constants';
import { WELCOME } from '@config/routs';

export default {
  API_URL: 'https://api.example.com/v1',
  INIT_ROUTE: WELCOME,
  LOCALES: { EN, RU },
  defaultLocale: EN,
};
