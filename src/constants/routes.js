const debug = process.env.NODE_ENV !== 'production';
const prefix = !debug
  ? '/virtual-library'
  : ''; /* This is prefix for github.pages.io */

export default {
  ROOT: `${prefix}/`,
  BOOKS: `${prefix}/books`,
  AUTHORS: `${prefix}/authors`,
};
