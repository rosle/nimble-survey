import { Polly } from '@pollyjs/core';
import FSPersister from '@pollyjs/persister-fs';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const DEFAULT_CONFIG = {
  adapters: ['node-http'],
  persister: 'fs',
  persisterOptions: {
    fs: {
      recordingsDir: '__recordings__',
    },
  },
  flushRequestsOnStop: true,
  recordIfMissing: false,
  recordFailedRequests: true,
};

const EXCLUDED_HEADERS = ['Authorization'];

const usePolly = (recordingName) => {
  const polly = new Polly(recordingName, {
    ...DEFAULT_CONFIG,
    matchRequestsBy: {
      headers: { exclude: EXCLUDED_HEADERS },
    },
  });

  polly.server.any().on('beforePersist', (_req, recording) => {
    recording.request.headers = recording.request.headers.filter(
      ({ name }) => !EXCLUDED_HEADERS.includes(name)
    );
  });

  polly.startRecording = () => {
    polly.configure({ recordIfMissing: true });
  };

  return polly;
};

export default usePolly;
