import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import buttonBack from "../../Assets/buttonBack.svg"
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function Favorites(){
    const navigation = useNavigate();
    const {user} = useAuth();
    const [favorites, setFavorites] = useState()



    async function handleRemoveFavorite(id){
        try{
            const newFavorites = favorites.filter( favorite => favorite.plate_id !== id)
            setFavorites(newFavorites)
            await api.delete(`/favorites/${id}`,)
            toast.success("Favorito removido com sucesso!")
        } catch(error){
            if(error.response){
                return toast.error(error.response.data.message)
            } else{
                return toast.error("Não foi possível excluir esse favorito")
            }
        }
         
    }

    function handleDetails(id) {
        navigation(`/plates/${id}`);
    }
  

    

    useEffect(() => {
        async function fetchFavorites(){
            const response = await api.get(`/favorites`)
            const data = response.data
            setFavorites(data)

            
        }

        fetchFavorites()
    }, [user.id])
    return(
        <Container>
            <Header />

            <main>
                <div onClick={() => navigation(-1)} className="buttonBack">
                    <img    src={buttonBack} alt="Botão para voltar para " />
                    <p>Voltar</p>
                </div>
                <h1>Meus Favoritos</h1>
    <div className="content">
                {favorites && favorites.length > 0 ? 
                (favorites.map( (favorite, index) =>(
                    <div key={String(index)} className="favorites">
                        <img onClick={() => handleDetails(favorite.plate_id)} src={`${api.defaults.baseURL}/files/${favorite.img}`} alt="" />

                        <div>
                            <p onClick={() => handleDetails(favorite.plate_id)} >{favorite.name}</p>
                            <span onClick={() => handleRemoveFavorite(favorite.plate_id)} >Remover dos favoritos</span>
                        </div>
                    </div>
                )))
                :
                (
                    <h2 className="notFavorites">Você ainda não Possui nada aqui...</h2>
                )
            }
    </div>
            </main>

            <Footer className = "newFooter" />

        </Container>
    )
}