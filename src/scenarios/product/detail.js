import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function detailProduct(MODULE) {
  group(MODULE, () => {
    const res = http.get('https://66cc49c7a4dd3c8a71b70c72.mockapi.io/api/he/users/1');
    checkBasic(MODULE, res);
  });
}