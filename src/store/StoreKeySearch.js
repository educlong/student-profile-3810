/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The reducer of the search function
 * @returns 
 */

const searchState={
    keySearch:  "", //key word that user typed to search the name of the student
    keyTag:"",      //key word that user typed to search the name of the tag
    listTags: []    //list of tags for all the students (initialization: null)
}

const reducerSearch = (state=searchState, action) => {
    switch(action.type){
        //action for search the name of the student
        case "KEY_WORDS_FOR_SEARCH":
            return {...state,keySearch: action.keySearch};
        //action for search the name of the tag
        case "KEY_WORDS_FOR_TAG":
            return {...state,keyTag: action.keyTag};
        //action for pushing a tag into a list of tags
        case "KEY_SEARCH_TAG":
            return {...state, listTags:action.listTags};
        default:
            return state;
    }
}

export default reducerSearch;