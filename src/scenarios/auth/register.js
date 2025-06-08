import http from 'k6/http';
import { group } from 'k6';
import { checkBasic } from '../../utils/check.js';

export function register(MODULE, metric) {
  group(MODULE, () => {
    const url = 'https://example.com/api/auth/register';
    const payload = JSON.stringify({
      username: `user_${Math.random()}`,
      password: '123456',
      email: `test_${Math.random()}@example.com`
    });

    const res = http.post(url, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    checkBasic(res, metric);
  });
}
