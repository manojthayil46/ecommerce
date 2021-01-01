export const initialState = {
  basket: [],
  user: null,
};

export const getTotalValue = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(action.item);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      console.log(action.id);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newBasket = [...state.basket];
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ITEM_INCREMENTED" :
      var indexx = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      var newBaskett = [...state.basket];
      newBaskett[indexx].quantity = state.basket[indexx].quantity + 1; 
      console.log(newBaskett);
      return {
        ...state,
        basket : newBaskett
      }
    

    default:
      return state;
  }
};

export default reducer;
