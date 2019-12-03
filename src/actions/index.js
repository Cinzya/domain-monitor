export const addDomain = () => {
    return {
        type: 'ADD_DOMAIN'
    };
};

export const addStatus = () => {
    return {
        type: 'ADD_STATUS'
    };
};

// Wenn Parameter in App.js hinzugefügt wurde, muss es in den
// Actions mit payload stehen (Inhalt: gleicher Wert wie Parameter)
// Zudem muss im jeweiligen Reducer im case return 
// festgehalten werden: return state + action.payload;