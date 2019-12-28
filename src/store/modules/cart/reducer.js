import produce from 'immer';

export default function cart(state =[], action){
  switch(action.type){
    case 'ADD_TO_CART':
            //(estado atual, copia do estado)
      return produce(state, draft=>{
        //pegando o id do produto que chegou aqui
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        
        //verificando se o produto já existe no carrinho, se existir, modifico apenas a quantidade
        if(productIndex >= 0){
          draft[productIndex].amount += 1;
        }else{
          draft.push({
            ...action.product,
            amount: 1,
          });
        }  
      });
 /*
 Sem o immer 
 return [...state, 
        {...action.product,
        amount: 1,
        }];
*/
    default:
      return state;
  }
}