import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function deleteProduct(MODULE) {
  group(MODULE, () => {
    const res = http.del('https://66cc49c7a4dd3c8a71b70c72.mockapi.io/api/he/users/2');
    checkBasic(MODULE, res);
  });
}