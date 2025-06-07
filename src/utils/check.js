import { check } from 'k6';
import { Trend, Counter } from 'k6/metrics';

// Khai báo biến Trend để đo thời gian phản hồi
export let responseTimeTrend = new Trend('response_time');
export let successCount = new Counter('success_requests');
export let failureCount = new Counter('failed_requests');


export function checkBasic(module, response, maxDurationMs = 1000) {
    checkStatus200(module, response);
    checkResponseTime(module, response, maxDurationMs);
}

export function checkStatus200(module, response) {
    if (!response) {
        console.error(`[${module}] Response is null or undefined`);
        failureCount.add(1);
        return;
    }

    const label = `[${module}] status is 200`;
    const isSuccess = response?.status === 200;

    check(response, {
        [`${label}`]: () => isSuccess,
    });

    if (isSuccess) {
        successCount.add(1);
    } else {
        failureCount.add(1);
    }
}

export function checkResponseTime(module, response, maxDurationMs = 500) {
    if (!response || !response.timings) {
        console.error(`[${module}] Response or timings are null or undefined`);
        failureCount.add(1);
        return;
    }

    const label = `[${module}] response time < ${maxDurationMs}`;
    check(response, {
        [`${label}`]: (r) => r.timings.duration < maxDurationMs,
    });

    responseTimeTrend.add(response.timings.duration);
}