import config from './config/testModes.js';
import { getModulesToRun, runModules } from './modules/runModules.js';
import { initMetrics } from './utils/check.js';

const testType = __ENV.TEST_TYPE || 'smoke';

if (!config.options[testType]) {
    console.error(`⚠ Test type "${testType}" không hợp lệ.`);
    throw new Error('Test dừng vì testType không hợp lệ.');
}

export let options = {
    ...config.options[testType],
    thresholds: {
        'http_req_duration': ['p(90)<800', 'p(95)<1000', 'p(99)<1500'],
        'http_req_failed': ['rate<0.01'],
        'checks': ['rate>0.95'],
    }
};

// Lấy danh sách các module cần chạy
const modulesToRun = getModulesToRun(config);
const metrics = {};

// Khởi tạo metrics cho từng module
modulesToRun.forEach(module => {
    metrics[module] = initMetrics(module);
});

// Hàm chính
export default function () {
    runModules(modulesToRun, metrics);
}