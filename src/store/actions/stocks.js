import { stocks } from "../constants";

export const updateStocks = data => {
    return {
        type: stocks.UPDATE_STOCKS,
        payload: { data }
    };
};
