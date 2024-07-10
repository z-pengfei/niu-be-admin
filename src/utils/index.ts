/**
 * 判断是否是外部链接
 *
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string) => {
  const isExternal = /^(https?:|http?:|mailto:|tel:)/.test(path);
  return isExternal;
};
