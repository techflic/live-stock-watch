import { stocks } from "../constants";

const INITIAL_STATE = {
    data: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case stocks.UPDATE_STOCKS:
            const updatedStocks = {};
            action.payload.data.forEach(([name, price]) => {
                if (!updatedStocks[name]) {
                    updatedStocks[name] = {
                        name,
                        price: state.data[name]
                            ? [...state.data[name].price, price]
                            : [price],
                        updatedAt: Date.now()
                    };
                } else {
                    updatedStocks[name].price = [
                        ...updatedStocks[name].price,
                        price
                    ];
                }
            });
            return {
                ...state,
                data: {
                    ...state.data,
                    ...updatedStocks
                }
            };
        default:
            return { ...state };
    }
};
