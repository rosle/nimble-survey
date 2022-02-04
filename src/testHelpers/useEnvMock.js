const useEnvMock = (mockEnv = {}) => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env, ...mockEnv };
  });

  afterEach(() => {
    process.env = env;
  });
};

export default useEnvMock;
