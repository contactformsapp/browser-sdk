import { resolveConfiguration } from "./config";

const config_ = resolveConfiguration();

interface IngestPayload {
  name: string;
  email: string;
  additionalInfo: {
    [key: string]: string;
  };
}

function ingest(config: string) {
  return async (payload: IngestPayload) => {
    return fetch(config_.getIngestEndpoint(config));
  };
}

window.ingest = ingest;

export { ingest, IngestPayload };
