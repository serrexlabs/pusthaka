const logger = (store: any) => (next: any) => (action: any) => {
  // eslint-disable-next-line no-console
  console.group(action.type);
  // eslint-disable-next-line no-console
  console.info("dispatching", action);
  const result = next(action);
  // eslint-disable-next-line no-console
  console.log("next state", store.getState());
  // eslint-disable-next-line no-console
  console.groupEnd();
  return result;
};

export default logger;
