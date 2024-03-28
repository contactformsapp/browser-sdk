import { IngestPayload } from ".";

declare global {
  interface Window {
    ingest: (config: string) => (payload: IngestPayload) => Promise<any>;
  }
}
