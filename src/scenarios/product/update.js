import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function updateProduct(MODULE) {
  group(MODULE, () => {
    const payload = JSON.stringify(
      {
        "createdAt": "2025-06-07T06:51:28.201Z",
        "name": "Byron Reinger update",
        "avatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/90.jpg",
        "id": "1"
      }
    );

    const res = http.put('https://66cc49c7a4dd3c8a71b70c72.mockapi.io/api/he/users/1', payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    checkBasic(MODULE, res);
  });
}