/** 判断是否是CSS颜色 */
function isCSSColor(str) {
  // 匹配十六进制颜色（如 #fff, #ffffff）
  const hexColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

  // 匹配RGB/RGBA颜色（如 rgb(255, 255, 255), rgba(255, 255, 255, 0.5)）
  const rgbColor = /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*[\d\.]+)?\s*\)$/;

  // 匹配HSL/HSLA颜色（如 hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.5)）
  const hslColor = /^hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*(,\s*[\d\.]+)?\s*\)$/;

  // 匹配预定义颜色名称（如 red, blue, green）
  const namedColor = /^[a-zA-Z]+$/;

  return hexColor.test(str) || rgbColor.test(str) || hslColor.test(str) || namedColor.test(str);
}

/** 判断是否是相对路径或绝对路径 */
function isPath(str) {
  // 匹配相对路径（如 ./path, ../path, path/to/file）
  const relativePath = /^\.{0,2}\/[^\/].*$/;

  // 匹配绝对路径（如 /path/to/file, C:\path\to\file）
  const absolutePath = /^(?:\/|[A-Za-z]:\\).*$/;

  return relativePath.test(str) || absolutePath.test(str);
}

export { isCSSColor, isPath };
