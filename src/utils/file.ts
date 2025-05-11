export function downloadTextAsFile(text: string, filename: string) {
  // 直接创建 File 对象（比 Blob 更高级）
  const file = new File([text], filename, { type: 'text/plain' });

  // 创建下载链接
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;

  // 触发下载
  document.body.appendChild(a);
  a.click();

  // 清理
  requestIdleCallback(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  });
}

export const downloadBlob = (response: any) => {
  try {
    // 从响应头获取文件名
    const contentDisposition = response.headers['content-disposition'];
    let fileName = 'download.zip';
    if (contentDisposition) {
      const fileNameMatch = contentDisposition.match(/filename="?(.+)"/);
      if (fileNameMatch && fileNameMatch[1]) {
        fileName = fileNameMatch[1];
      }
    }

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
  }
};
