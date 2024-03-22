const executeSequencePromises = <T> (list: T[], fn: (data: T) => Promise<void>) => {
  return list.reduce(
    (promise, data) => promise.then(() => fn(data)),
    Promise.resolve(),
  );
};

export default executeSequencePromises;
