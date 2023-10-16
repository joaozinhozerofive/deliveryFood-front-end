import { Container } from "./style";  


import favorites from "../../Assets/favorites.svg"
import buttonEdit from "../../Assets/buttonEdit.svg"
import { Includs } from "../Includs";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import {register} from 'swiper/element/bundle'
register()
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { SwiperSlide, Swiper } from "swiper/react";
import { responsives } from "../../Configs";




export function Meals ({plates, ...rest}) {
    const navigation = useNavigate();
    const {isAdmin} = useAuth();

     
    function handleDetails(id) {
      navigation(`/plates/${id}`);
  }
    function handleEdit(id) {
      navigation(`/edit/${id}`);
  }

    return(
        <Container 
        plates = {plates}
        {...rest}>

            {!isAdmin ? 
            <Swiper
            spaceBetween={50}
            slidesPerView = {5}
            navigation
            >

            {plates && plates.map(plate => (
             
             <SwiperSlide key={String(plate.plate_id)} >
            <div  className="mealsActive">
                <img onClick={() => handleEdit(plate.plate_id)}  id="edit"  src={buttonEdit} alt="coração favoritos" />
                <img  onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                <h1 id="snackName">{`${plate.name} >` }</h1>
                <p>{`${plate.description}`}</p>
                <h2>{`R$ ${plate.price}`}</h2>
                
               </div>
               </SwiperSlide>
               ))}
               </Swiper>
               :
            

             
               <Swiper
               slidesPerView = {window.matchMedia(responsives.laptopL).matches ? 4 : 2}
               navigation
               >
               {plates && plates.map(plate => (
   
                
                <SwiperSlide key={String(plate.plate_id)} >
               <div  className="mealsActive">
                   <img onClick={() => handleEdit(plate.plate_id)}  id="edit"  src={favorites} alt="coração favoritos" />
                   <img  onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                   <h1 id="snackName">{`${plate.name} >` }</h1>
                   <p>{`${plate.description}`}</p>
                   <h2>{`R$ ${plate.price}`}</h2>
                   <Includs />
                   
                  </div>
                  </SwiperSlide>
                  ))}
                  </Swiper>
}
            
            
        </Container>
    )
}