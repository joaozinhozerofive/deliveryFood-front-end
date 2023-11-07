import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";


export const CartContext = createContext({});

function CartProvider({children}){
    const [cartItems, setCartItems] = useState([])
    const [cartItemsLength, setCartItemsLength] = useState(0)



    



    function addPlateToCart(plate, quantity) {
        const newPlate = {
          plate_id: plate.plate_id,
          img: plate.img,
          name: plate.name,
          price: plate.price,
          quantity : quantity
        };
        


        if(quantity === 0){
            return toast.warning("Você deve incluir ao menos uma unidade ao carrinho")
        }
      
        const checkPlateExist = cartItems.some((item) => item.plate_id === newPlate.plate_id);
      
        if (checkPlateExist) {
          return toast.error("Este prato já foi adicionado no seu carrinho.");
        } else {
          try {
            setCartItems((prevState) => {
              const updatedCart = [...prevState, newPlate] 
              localStorage.setItem('@foodExplorer:cart', JSON.stringify(updatedCart));
              return updatedCart;
            } );

            toast.success(`${newPlate.name} adicionado ao carrinho!`)
          } catch (error) {
            toast.error("Não foi possível adicionar o prato ao carrinho.");
          }
        }

        
      }

      


      function removePlateToCart(plate){

        const newItems = cartItems.filter(item => item.plate_id !== plate.plate_id)
        setCartItems(newItems);
        localStorage.setItem('@foodExplorer:cart', JSON.stringify(newItems))


      }

      function cleanCart(){
        setCartItems([])
        localStorage.removeItem('@foodExplorer:cart')
      }


    useEffect(() => {
    localStorage.setItem("@foodExplorer:cart", JSON.stringify(cartItems))
    const cartItemsString = localStorage.getItem('@foodExplorer:cart')
    const cartLength = JSON.parse(cartItemsString) || []

    setCartItemsLength(cartLength.length)    
  }, [cartItems]);


      return (
        <CartContext.Provider value={{
          cartItems,
          cartItemsLength,
          cleanCart,
          addPlateToCart,
          removePlateToCart,
        }}
        >
          {children}
        </CartContext.Provider>
      )
}



function UseCart(){
    const context = useContext(CartContext)


    return context;
}



export {CartProvider, UseCart}
