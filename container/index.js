const getData = (state = [], action) => {
    switch (action.type) {
        case 'GET_MENU_LIST':
            return [...state];
        default:
            return state
    }
};

export default getData
