const setPageReducer = (state = 'home', action) => {
    console.log(action)
    if(action.type === 'SET-PAGES') {
        return action.page;
    }
    return state;
}

export default setPageReducer