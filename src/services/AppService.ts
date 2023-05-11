class AppService {
  public async GetData(): Promise<string> {
    const api = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(api + "/sync", { method: 'POST' });
    return await response.json();
  }
}

export const Service = new AppService();