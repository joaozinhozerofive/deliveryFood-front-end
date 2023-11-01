import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});



function AuthProvider ({ children }) {
    const [data, setData] = useState({});

    

    
    

    async function signIn({ email, password }){


        try{
            const response = await api.post("/sessions", {email,password})
            const {token, user} = response.data;


            const isAdmin = user.admin  

            localStorage.setItem("@deliveryFood:user", JSON.stringify(user))
            localStorage.setItem("@deliveryFood:token", token)

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


                localStorage.removeItem("@deliveryFood:user")
                localStorage.removeItem("@deliveryFood:token")
                localStorage.removeItem('@foodExplorer:cart')


                setData({})
            }


            useEffect(() => {
                const token = localStorage.getItem("@deliveryFood:token");
                const user = localStorage.getItem("@deliveryFood:user");


                if (token && user) {
                  api.defaults.headers.authorization = `Bearer ${token}`;
            
                  setData({
                    token,
                    user: JSON.parse(user)
                  });
                }
              }, []);
            
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