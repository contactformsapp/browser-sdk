import { resolveConfiguration } from "./config";

const config_ = resolveConfiguration();

interface IngestPayload {
  name: string;
  email: string;
  additionalDetails: {
    [key: string]: string;
  };
}

function ingest(config: string) {
  return async (payload: IngestPayload) => {
    return fetch(config_.getIngestEndpoint(config), {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        SDK: "Browser",
      },
      redirect: "follow",
    });
  };
}

window.ingest = ingest;

export { ingest, IngestPayload };
