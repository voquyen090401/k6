import { createProduct } from './create.js';
import { deleteProduct } from './delete.js';
import { detailProduct } from './detail.js';
import { listProduct } from './list.js';
import { updateProduct } from './update.js';

const GROUP = 'product';

export const scenarios = [
  { fn: listProduct, group: GROUP, label: 'list' },
  { fn: detailProduct, group: GROUP, label: 'update' },
  { fn: createProduct, group: GROUP, label: 'create' },
  { fn: updateProduct, group: GROUP, label: 'update' },
  { fn: deleteProduct, group: GROUP, label: 'delete' },
];

export function runScenarios(useGroup, metrics) {
  scenarios.forEach(({ fn, label }) => {
    const moduleName = useGroup ? GROUP : `${GROUP}_${label}`;
    fn(moduleName, metrics[moduleName]);
  });
}