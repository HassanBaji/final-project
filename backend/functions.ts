import { readFileSync } from 'fs';

import yml from 'js-yaml';

const files = [
  readFileSync('./src/player/serverless.yml'),
  readFileSync('./src/group/serverless.yml'),
  readFileSync('./src/games/serverless.yml')
];

export default files.reduce((res, row) => {
  const data = yml.load(row);

  for (const [key, val] of Object.entries<any>(data)) {
    res[key] = { ...res[key], ...val };
  }

  return res;
}, {});
