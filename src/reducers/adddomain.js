const addDomainReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD_DOMAIN':
            return state;
        default:
            return null;
    }
};

export default addDomainReducer;