// Helper function to create redux store actions.
export const createAction = (type, payload = "_default") => {
  return payload === "_default" ? { type } : { type, payload };
};
