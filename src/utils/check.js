import { check } from 'k6';
import { Trend } from 'k6/metrics';

// Khai báo biến Trend để đo thời gian phản hồi
export let responseTimeTrend = new Trend('response_time');

export function checkBasic(module, response, maxDurationMs = 1000) {
    checkStatus200(module, response)
    checkResponseTime(module, response, maxDurationMs)

    responseTimeTrend.add(response.timings.duration, { module: module });
}

export function checkStatus200(module, response) {
    const label = `[${module}] status is 200`
    check(response, {
        [`${label}`]: (r) => r?.status === 200,
    });

    responseTimeTrend.add(response?.timings?.duration, { module: module });
}

export function checkResponseTime(module, response, maxDurationMs = 500) {
    const label = `[${module}] response time < ${maxDurationMs}`
    check(response, {
        [`${label}`]: (r) => r?.timings?.duration < maxDurationMs,
    });

    responseTimeTrend.add(response?.timings?.duration, { module: module });
}
