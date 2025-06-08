import { login } from './login.js';
import { register } from './register.js';

const GROUP = 'auth';

export const scenarios = [
  { fn: login, group: GROUP, label: 'login' },
  { fn: register, group: GROUP, label: 'register' },
];

export function runScenarios(useGroup, metrics) {
  scenarios.forEach(({ fn, label }) => {
    const moduleName = useGroup ? GROUP : `${GROUP}_${label}`;
    fn(moduleName, metrics[moduleName]);
  });
}