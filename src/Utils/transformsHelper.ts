
// config
import config from '@config/config';
import { ASC, DESC } from '@config/constants';
import { IOrder } from '@Types/models/Order';
import { get, orderBy } from 'lodash';
import moment from 'moment';
import { trimZero } from './mathHelpers';

// utils
import { addTotalOBColumn, getHR24 } from '@Utils/logicHelper';

export const transformTextToInteger = (value) => {
  const newValue = String(value)
    .replace(/[^0-9]/g, '');

  return newValue;
};

export const transformTextToDouble = (value) => {
  const newValue = String(value)
    .replace(/[,]/g, '.')
    .replace(/^\.[0-9]*$/g, `0. ${value}`)
    .replace(/(?!(\d+(\.*\d*)))[^\.]/g, '');

  return newValue
    .split('')
    .reduce((string, char) => (string.includes('.') && char === '.' ? string : string + char), '');
};

export const transformTickerGet = ticker => ({
  fromSymbol: ticker.fromSymbol,
  hr24: getHR24(ticker.marketData.price, ticker.marketData.open24Hour),
  price: +trimZero(ticker.marketData.price),
  symbol: ticker.symbol,
  toSymbol: ticker.toSymbol,
  volume: ticker.marketData.volume,
});

export const transformTickerWSS = ticker => ({
  fromSymbol: ticker.fromSymbol,
  hr24: getHR24(ticker.price, ticker.open24Hour),
  price: +trimZero(ticker.price),
  symbol: ticker.symbol,
  toSymbol: ticker.toSymbol,
  volume: ticker.volume,
});

// transform snapshot Event OrderBook
export const transformSnapshotOB = ({ buyOrders, sellOrders }) => {

  // get data
  const buyOrdersRaw = buyOrders[1];
  const sellOrdersRaw = sellOrders[1];

  const buyOrdersTransform = buyOrdersRaw.map(item => ({
    amount: item.remainVolume,
    count: item.count,
    price: item.price,
    uuid: item.uuid,
  }));

  const sellOrdersTransform = sellOrdersRaw.map(item => ({
    amount: item.remainVolume,
    count: item.count,
    price: item.price,
    uuid: item.uuid,
  }));

  const buyOrdersTransformSort = orderBy(buyOrdersTransform, 'price' , DESC);
  const sellOrdersTransformSort = orderBy(sellOrdersTransform, 'price' , ASC);

  // add total column
  const buyOrdersBook = addTotalOBColumn(buyOrdersTransformSort);
  const sellOrdersBook = addTotalOBColumn(sellOrdersTransformSort);

  return { buyOrdersBook,  sellOrdersBook };
};

// transform NEW, UPDATE, REMOVE Event OrderBook
export const transformOB = (raw) => {
  const data = {
    amount: raw.remainVolume,
    count: raw.count,
    price: raw.price,
    type: raw.type,
    uuid: raw.uuid,
  };

  return data;
};

export const transformOrderGet = (order: any): IOrder => ({
  date: order.date,
  fromSymbol: order.fromSymbol,
  price: order.price,
  priceLimit: order.orderLimit,
  priceStop: order.orderStop,
  remainVolume: order.remainVolume,
  side: order.side,
  status: order.status,
  symbol: order.symbol,
  toSymbol: order.toSymbol,
  type: order.type,
  uuid: order.uuid,
  volume: order.volume,
});

export const transformArrayToObject = (array: any[], keyPath: string): {[s: string ]: any} => {
  const data = {};
  array.forEach((value) => {
    data[get(value, keyPath, '')] = value;
  });

  return data;
};

export const transformObjectToArray = (obj: { [s: string ]: any }): any[] => {
  const data = Object.keys(obj).map((key) => {
    return  obj[key];
  });

  return data;
};

export const transformUser = user => ({
  email: user.email,
  emailVerified: user.email_verified,
  firstName: user.first_name || '',
  id: user.id,
  lastName: user.last_name || '',
  password: user.password,
  phone: user.phone,
  phoneVerified: user.phone_verified,
  referral: user.referral,
});

export const transformLevelsReferral = levelReferral => ({
  canBuy: levelReferral.can_buy || false,
  canGet: levelReferral.can_get || false,
  description: levelReferral.description || '',
  level: levelReferral.level || 0,
  moneyPrice: levelReferral.money_price || 0,
  pointsPrice: levelReferral.points_price || 0,
  privileges: {
    // it`s k, example 110% = 100 * k;
    makerCommissionPercent: +get(levelReferral, 'privileges.maker_commission_percent', 0) * 100,
    referralPercentFirstLevel: get(levelReferral, 'privileges.referral_percent_first_level', 0),
    referralPercentSecondLevel: get(levelReferral, 'privileges.referral_percent_second_level', 0),
    // it`s k, example 110% = 100 * k;
    takerCommissionPercent: +get(levelReferral, 'privileges.taker_commission_percent', 0) * 100,
    withdrawalCommissionPercent: get(levelReferral, 'privileges.withdrawal_commission_percent', 0),
  },
});

export const transformMyInfoReferral = myInfoReferral => ({
  dateLevelValidEnd: myInfoReferral.date_level_valid_end || '',
  dateLevelValidStart: myInfoReferral.date_level_valid_start || '',
  level: myInfoReferral.level || 0,
  points: myInfoReferral.points || 0,
  referralCode: myInfoReferral.referral_code || '',
});
