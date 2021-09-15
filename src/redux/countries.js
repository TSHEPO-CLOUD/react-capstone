import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from './api';

const LOAD_COUNTRIES = 'cases/load-countries';
const LOAD_COUNTRY = 'cases/load-country';

export const loadCountries = (payload) => ({
  type: LOAD_COUNTRIES,
  payload,
});