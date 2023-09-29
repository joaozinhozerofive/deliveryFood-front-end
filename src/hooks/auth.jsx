import { createContext, useContext, useState } from "react";

import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});



function AuthProvider ({ children }) {
    const [data, setData] = useState({});

    

    
    

    async function signIn({ email, password }){


        try{
            const response = await api.post("/sessions", {email,password})
            const {token, user} = response.data;


            const isAdmin = user[0].admin

            localStorage.setItem("deliveryFood:user", JSON.stringify(user))
            localStorage.setItem("deliveryFood:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`


            setData({token, user, isAdmin})

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar.")
            }

        }
            

            }


            function signOut(){


                localStorage.removeItem("deliveryFood:user")
                localStorage.removeItem("deliveryFood:token")


                setData({})



                
            }
            
            return (
                <AuthContext.Provider value={{
                    signIn,
                    signOut,
                    isAdmin : data.isAdmin,
                    user : data.user
                }}>
            {children}
        </AuthContext.Provider>
        )
    }




function useAuth(){
    const context = useContext(AuthContext)

    return context
    
}

export {AuthProvider, useAuth};