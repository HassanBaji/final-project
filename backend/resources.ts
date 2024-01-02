import { readFileSync } from 'fs';

import yml from 'js-yaml';

const files = [
  readFileSync('./src/resources/cognito.yml'),
  readFileSync('./src/resources/imageS3.yml')
];

export default files.reduce((res, row) => {
  const data = yml.load(row);

  for (const [key, val] of Object.entries<any>(data)) {
    res[key] = { ...res[key], ...val };
  }

  return res;
}, {});
