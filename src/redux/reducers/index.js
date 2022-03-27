import { combineReducers } from "redux";
import { generatorReducer } from "./generator";

const rootReducer = combineReducers({
  generator: generatorReducer,
});

export { rootReducer };
