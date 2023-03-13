export const DownloadApp = async () => {
    const response = await fetch( `http://localhost:4000/api/app/download`);
    const data = await response.json();
    return data;
  }