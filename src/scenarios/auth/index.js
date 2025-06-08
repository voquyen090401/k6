import { login } from './login.js';
import { register } from './register.js';

const GROUP = 'AUTH';

const scenarios = [
  { fn: login, label: 'LOGIN' },
  { fn: register, label: 'REGISTER' },
];

export function runScenarios(useGroup, metric) {
  scenarios.forEach(({ fn, label }) => {
    const moduleName = useGroup ? GROUP : `${GROUP} - ${label}`;
    fn(moduleName, metric);
  });
}