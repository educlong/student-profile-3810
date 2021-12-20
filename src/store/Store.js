import reducerSearch from "./StoreKeySearch";
import reducerStudent from "./StoreStudents";
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The reducer of the app
 * @returns 
 */

var redux = require("redux");
const reducerHatchways = redux.combineReducers({
    reducerStudent: reducerStudent, //the reducer of the student information
    reducerSearch: reducerSearch    //the reducer of the search function (search name and search tag)
})

var storeHatchways = redux.createStore(reducerHatchways);
export default storeHatchways;
