import { keysType, dbType } from './keyTypes';

let db: dbType;

if (
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
) {
  db = require('./prod.ts').db;
} else {
  db = require('./dev.ts').db;
}

export const keys: keysType = {
  db,
};
