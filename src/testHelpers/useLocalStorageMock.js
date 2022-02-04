const localStorageMock = () => {
  let store = {};

  const getItem = (key) => store[key];
  const setItem = (key, value) => (store[key] = value);
  const clear = () => (store = {});
  const removeItem = (key) => delete store[key];
  const print = () => console.log(store);

  return {
    getItem,
    setItem,
    clear,
    removeItem,
    print,
  };
};

const useLocalStorageMock = () => {
  const myLocalStorageMock = localStorageMock();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: myLocalStorageMock,
    });
  });

  afterEach(() => myLocalStorageMock.clear());

  return myLocalStorageMock;
};

export default useLocalStorageMock;
