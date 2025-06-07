import { mkdirSync, existsSync } from 'fs';

const dir = './reports';

if (!existsSync(dir)) {
  mkdirSync(dir);
  console.log(`Folder ${dir} created.`);
} else {
  console.log(`Folder ${dir} already exists.`);
}
