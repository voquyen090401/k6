import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function listProduct(MODULE) {
  group(MODULE, () => {
    const res = http.get('https://example.com/api/products');
    checkBasic(MODULE, res);
  });
}