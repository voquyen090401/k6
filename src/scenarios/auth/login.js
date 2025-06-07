import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function login(MODULE) {
  group(MODULE, () => {
    const url = 'https://example.com/api/auth/login';
    const payload = JSON.stringify({ username: 'user1', password: '123456' });

    const res = http.post(url, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    checkBasic(MODULE, res);
  });
}
