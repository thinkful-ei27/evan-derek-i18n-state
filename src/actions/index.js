// Add your code for SET_LANGUAGE and setLanguage
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language
  }
};
