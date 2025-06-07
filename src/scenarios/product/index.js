import { createProduct } from './create.js';
import { deleteProduct } from './delete.js';
import { detailProduct } from './detail.js';
import { listProduct } from './list.js';
import { updateProduct } from './update.js';

const GROUP = 'PRODUCT';

const scenarios = [
  { fn: listProduct, label: 'LIST' },
  { fn: detailProduct, label: 'DETAIL' },
  { fn: createProduct, label: 'CREATE' },
  { fn: updateProduct, label: 'UPDATE' },
  { fn: deleteProduct, label: 'DELETE' },
];

export function runScenarios(useGroup) {
  scenarios.forEach(({ fn, label }) => {
    const moduleName = useGroup ? GROUP : `${GROUP} - ${label}`;
    fn(moduleName);
  });
}