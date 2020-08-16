export const initialState = {
    basket: [],
    user: null,

};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],


            };
        // LOGIC FOR ADDING ITEMS TO BASKET
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
                // items exist in the basket , remove it
            }
            else {
                // warn message shwon @ red console log 
            }




            return { ...state, basket: newBasket }

        // LOGIC TO REMOVE ITEMS FROM BASKET

        default:
            return state;
    }

}
export default reducer;