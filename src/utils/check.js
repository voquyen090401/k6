import { check } from 'k6';
import { Trend, Counter } from 'k6/metrics';

// Hàm khởi tạo metrics cho mỗi module
export function initMetrics(module) {
    return {
        responseTimeTrend: new Trend(`${module}_response_time`),
        successCount: new Counter(`${module}_success_requests`),
        failureCount: new Counter(`${module}_failed_requests`)
    };
}

// Hàm kiểm tra cơ bản
export function checkBasic(response, metrics, maxDurationMs = 1000) {
    checkStatus200(response, metrics);
    checkResponseTime(response, metrics, maxDurationMs);
}

// Hàm kiểm tra trạng thái 200
export function checkStatus200(response, metrics) {
    if (!response) {
        metrics.failureCount.add(1);
        return;
    }

    const label = `status is 200`;
    const isSuccess = response?.status === 200;

    check(response, {
        [`${label}`]: () => isSuccess,
    });

    if (isSuccess) {
        metrics.successCount.add(1);
    } else {
        metrics.failureCount.add(1);
    }
}

// Hàm kiểm tra thời gian phản hồi
export function checkResponseTime(response, metrics, maxDurationMs = 500) {
    if (!response || !response.timings) {
        metrics.failureCount.add(1);
        return;
    }

    const label = `response time < ${maxDurationMs}`;
    check(response, {
        [`${label}`]: (r) => r.timings.duration < maxDurationMs,
    });

    metrics.responseTimeTrend.add(response.timings.duration);
}