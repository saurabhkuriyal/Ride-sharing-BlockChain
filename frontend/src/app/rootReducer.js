import { combineReducers } from "@reduxjs/toolkit";

import tokenReducer from "../features/handelSlice/tokenSlice";

const rootReducer=combineReducers({
    auth:tokenReducer,
})

export default rootReducer;