import config from "../config/testModes.js"
import { runScenarios as runAuth, scenarios as authMetrics } from '../scenarios/auth/index.js';
import { runScenarios as runProduct, scenarios as productMetrics } from '../scenarios/product/index.js';

export const allModules = {
    auth: runAuth,
    product: runProduct
};

function getMetrics(allScenarios) {
    const allMetrics = []
    allScenarios.forEach(scenarios => {
        scenarios.forEach(({ group, label }) => {
            const moduleName = config.useGroup ? group : `${group}_${label}`;
            allMetrics.push(moduleName)
        })
    });
    return allMetrics
}

export const allMetrics = getMetrics([authMetrics, productMetrics])