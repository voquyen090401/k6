import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function deleteProduct(MODULE) {
  group(MODULE, () => {
    const res = http.del('https://example.com/api/products/1');
    checkBasic(MODULE, res);
  });
}