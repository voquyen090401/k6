import { check } from 'k6';

export function checkBasic(module, response, maxDurationMs = 1000) {
    checkStatus200(module, response)
    checkResponseTime(module, response, maxDurationMs)

    responseTimeTrend.add(response.timings.duration, { module: moduleName });
}

export function checkStatus200(module, response) {
    const label = `[${module}] status is 200`
    check(response, {
        [`${label}`]: (r) => r.status === 200,
    });

    responseTimeTrend.add(response.timings.duration, { module: moduleName });
}

export function checkResponseTime(module, response, maxDurationMs = 500) {
    const label = `[${module}] response time < ${maxDurationMs}`
    check(response, {
        [`${label}`]: (r) => r.timings.duration < maxDurationMs,
    });

     responseTimeTrend.add(response.timings.duration, { module: moduleName });
}
