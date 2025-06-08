import { allModules } from './index.js';
import config from "../config/testModes.js"

export function getModulesToRun(config) {
  let modulesToRun = Object.keys(allModules);

  if (config && Array.isArray(config.modules) && config.modules.length > 0) {
    modulesToRun = config.modules.filter((m) => m in allModules);
  }

  if (modulesToRun.length === 0) {
    console.warn('⚠ Không có module hợp lệ nào được cấu hình để chạy. Dừng test.');
  }

  return modulesToRun;
}

export function runModules(modulesToRun, metrics) {
  for (const moduleName of modulesToRun) {
    allModules[moduleName](config.useGroup, metrics);
  }
}
