import { Map } from 'immutable'

const defaultLang = 'en';
function returnInitialLanguage(){
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang == 'es' || userLang == 'ja' || userLang == 'en') {
        return userLang
    }
}

returnInitialLanguage();


const initialState = Map({
    language : returnInitialLanguage() || defaultLang
});

const CHANGE_USER_LANGUAGE = 'CHANGE_USER_LANGUAGE';

function languageChange(language){
    return {
        type : CHANGE_USER_LANGUAGE,
        language
    }
}

export function handleLanguageChange(selectedLang){
    return function(dispatch){
        dispatch(languageChange(selectedLang))
    }
}

export default function User(state = initialState, action){
    switch(action.type){
        case(CHANGE_USER_LANGUAGE):
            return state.merge({
                language : action.language
            });
        break;
        default:
            return state;
    }
};