import config from './config/testModes.js';
import { getModulesToRun, runModules } from './modules/runModules.js';

const testType = __ENV.TEST_TYPE || 'smoke';

if (!config.options[testType]) {
    console.error(`⚠ Test type "${testType}" không hợp lệ.`);
    throw new Error('Test dừng vì testType không hợp lệ.');
}

export let options = config.options[testType];

const modulesToRun = getModulesToRun(config);

export default function () {
    runModules(modulesToRun);
}
