import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function updateProduct(MODULE) {
  group(MODULE, () => {
    const payload = JSON.stringify({ price: 120 });

    const res = http.put('https://example.com/api/products/1', payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    checkBasic(MODULE, res);
  });
}