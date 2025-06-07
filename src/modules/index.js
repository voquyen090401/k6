import { runScenarios as runAuth } from '../scenarios/auth/index.js';
import { runScenarios as runProduct } from '../scenarios/product/index.js';

export const allModules = {
    auth: runAuth,
    product: runProduct
};