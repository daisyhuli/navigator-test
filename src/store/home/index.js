let initialState = {
    priceList:[]
}

export const setPriceList = product => {
    return {
        type: types.SET_PRICELIST,
        payload:{
            priceList: product,
        }
    }
};

export const types = {
    SET_PRICELIST: 'SET_PRICELIST',
}

export const homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_PRICELIST:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

