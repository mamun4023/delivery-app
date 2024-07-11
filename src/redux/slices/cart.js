
import {createSlice} from '@reduxjs/toolkit'



const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        itemList : [],
        totalQuantity : 0,
        showCart : false
    },
    reducers : {
        addProduct(state, actions){
            const newItem = actions.payload;
            const existitem = state.itemList.find(items => items.id === newItem.id)

            if(existitem){
                existitem.quantity++;
                existitem.price += newItem.price
            }else{
                state.itemList.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.title
                })
            }
        },
        removeProduct(state){

        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions
export default cartSlice.reducer;