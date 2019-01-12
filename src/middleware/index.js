import { ADD_TODO } from "../actions/actionTypes";


const forbiddenWords = ["spam", "money"];
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.text === ADD_TODO) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.task.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}