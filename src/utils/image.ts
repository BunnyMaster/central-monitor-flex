export const getImage = (path: string) => {
  const image = new URL(path, import.meta.url);
  return image.href;
};
