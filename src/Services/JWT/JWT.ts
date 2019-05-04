import { setJWTAction } from '@Actions/tools/JWT';
import store from '@root/store';
import moment from 'moment';
import { AsyncStorage } from 'react-native';

const ACCESS_TOKEN  = 'ACCESS_TOKEN';
const EXPIRE_IN  = 'EXPIRE_IN';
const REFRESH_EXPIRE_IN = 'REFRESH_EXPIRE_IN';

async  function save(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

async function get(key: string) {
  const data = await AsyncStorage.getItem(key);
  return data;
}

class JWT {

  public static async getInstance() {
    return {
      accessToken: await get(ACCESS_TOKEN),
      expiresIn: +await get(EXPIRE_IN),
      refreshExpiresIn: + await get(REFRESH_EXPIRE_IN),
    };
  }

  public static getAccessToken() {
    return store.getState().JWT.accessToken;
  }

  public static getExpiresIn() {
    return store.getState().JWT.expiresIn;
  }

  public static getRefreshExpiresIn() {
    return store.getState().JWT.refreshExpiresIn;
  }

  public static async clearAll() {
    await AsyncStorage.clear();
    store.dispatch(setJWTAction({
      accessToken: '',
      expiresIn: 0,
      refreshExpiresIn: 0,
    }));
  }

  public static async setAccessToken(token) {
    await save(ACCESS_TOKEN, token);
    store.dispatch(setJWTAction({
      accessToken: String(token),
    }));
  }

  public static async setExpiresIn(atDate) {
    const date = +moment.unix(atDate);
    await save(EXPIRE_IN, String(date));
    store.dispatch(setJWTAction({
      expiresIn: date,
    }));
  }

  public static async setRefreshExpiresIn(atDate) {
    const date = +moment.unix(atDate);
    await save(REFRESH_EXPIRE_IN, String(date));
    store.dispatch(setJWTAction({
      refreshExpiresIn: date,
    }));
  }

  public static async hasAccessToken() {
    const data = store.getState().JWT.accessToken;
    return !!data;
  }

  public static async hasExpiresIn() {
    const data  = store.getState().JWT.expiresIn;
    return !!data;
  }

  public static async hasRefreshExpiresIn() {
    const data  = store.getState().JWT.refreshExpiresIn;
    return !!data;
  }

  public static async hasAccessTokenStorage() {
    const data  = await get(ACCESS_TOKEN);
    return !!data;
  }

  public static async hasExpiresInStorage() {
    const data  = await get(EXPIRE_IN);
    return !!data;
  }

  public static async hasRefreshExpiresInStorage() {
    const data  = await get(REFRESH_EXPIRE_IN);
    return !!data;
  }
}

export default JWT;
