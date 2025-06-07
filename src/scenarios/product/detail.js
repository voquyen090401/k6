import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function detailProduct(MODULE) {
  group(MODULE, () => {
    const res = http.get('https://example.com/api/products/1');
    checkBasic(MODULE, res);
  });
}