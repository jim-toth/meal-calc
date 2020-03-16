export const SET_API_KEY = 'SET_API_KEY';

export type API_KEY_ACTION = {
  type: string,
  apiKey: string
};

export function setApiKey(apiKey: string): API_KEY_ACTION {
  return { type: SET_API_KEY, apiKey }
}
