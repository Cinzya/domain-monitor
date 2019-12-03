const addStatusReducer = (state = 1, action) => {
    switch(action.type){
        case 'ADD_STATUS':
            return state;
        default:
            return null;
    }
};

export default addStatusReducer;