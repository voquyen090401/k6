import config from './config/testModes.js';
import { getModulesToRun, runModules } from './modules/runModules.js';

const testType = __ENV.TEST_TYPE || 'smoke';

if (!config.options[testType]) {
    console.error(`⚠ Test type "${testType}" không hợp lệ.`);
    throw new Error('Test dừng vì testType không hợp lệ.');
}

export let options = {
    ...config.options[testType],
    thresholds: {
        // Thời gian phản hồi HTTP (90% request phải dưới 800ms)
        'http_req_duration': ['p(90)<800', 'p(95)<1000', 'p(99)<1500'],

        // Tỉ lệ lỗi < 1%
        'http_req_failed': ['rate<0.01'],

        // Check thành công ít nhất 95%
        'checks': ['rate>0.95'],
    }
};


const modulesToRun = getModulesToRun(config);

export default function () {
    runModules(modulesToRun);
}
