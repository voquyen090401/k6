import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function createProduct(MODULE) {
  group(MODULE, () => {
    const payload = JSON.stringify({
      name: `Product ${Math.random()}`,
      price: 100,
      stock: 50,
    });

    const res = http.post('https://example.com/api/products', payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    checkBasic(MODULE, res);
  });
}