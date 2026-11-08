import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../..');

export const config = {
  port: Number(process.env.PORT ?? 3001),
  dataDir: path.join(ROOT, 'data'),
  booksDir: path.join(ROOT, 'data', 'books'),
  coversDir: path.join(ROOT, 'data', 'covers'),
  dbPath: path.join(ROOT, 'data', 'library.db'),
};
