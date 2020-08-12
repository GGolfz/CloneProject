export const initialState = {
    type: 'normal',
    lang: 'th'
};

export const actionType = {
    CHANGE_TYPE: "CHANGE_TYPE",
    CHANGE_LANG: "CHANGE_LANG"
}

const reducer = (state,action) => {
    switch(action.type){
        case actionType.CHANGE_TYPE:
            return {
                ...state,
                type: action.value
            }
        case actionType.CHANGE_LANG:
            return {
                ...state,
                lang: action.value
            }
        default:
            return state;
    }
}
export default reducer;