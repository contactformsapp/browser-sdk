interface IConfig {
  baseEndpoint: string;
  getIngestEndpoint: (config: string) => string;
}

function resolveConfiguration(): IConfig {
  const apiUrl = "https://api.contactforms.app";
  return {
    baseEndpoint: apiUrl,
    getIngestEndpoint: (config: string) => {
      return `${apiUrl}/ingest/${config}`;
    },
  };
}

export { IConfig, resolveConfiguration };
