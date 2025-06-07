import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function createProduct(MODULE) {
  group(MODULE, () => {
    const payload = JSON.stringify({
      "createdAt": "2025-06-07T06:51:28.201Z",
      "name": "Byron Reinger New",
      "avatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/90.jpg",
    });

    const res = http.post('https://66cc49c7a4dd3c8a71b70c72.mockapi.io/api/he/users', payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    checkBasic(MODULE, res);
  });
}