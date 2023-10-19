import { Container } from "./style";  


import favorites from "../../Assets/favorites.svg"
import buttonEdit from "../../Assets/buttonEdit.svg"
import imgButtonLess from "../../Assets/less.svg"    
import imgButtonMore from "../../Assets/more.svg" 

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import {register} from 'swiper/element/bundle'
register()
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import { SwiperSlide, Swiper } from "swiper/react";
import { responsives } from "../../Configs";
import { useEffect, useState } from "react";




export function Meals ({plates, ...rest}) {
    const navigation = useNavigate();
    const {isAdmin} = useAuth();
    const [slidesPerView, setSlidesPerView] = useState(2)
    const [spaceBetween, setSpaceBetween] = useState(130)
    const [quantity, setQuantity] = useState()

     
    function handleDetails(id) {
      navigation(`/plates/${id}`);
  }
    function handleEdit(id) {
      navigation(`/edit/${id}`);
  }

  let count = "1"
  
  function increaseValue(plate_id) {
     count = document.getElementById(`counter-${plate_id}`);
    
    const currentValue = parseInt(count.innerText, 10);
    if(currentValue > 19 ){
      return
    }
    count.innerText = currentValue + 1;
  }
  function decreaseValue(plate_id) {
    count = document.getElementById(`counter-${plate_id}`);

    
    const currentValue = parseInt(count.innerText, 10);
    
    if(currentValue < 1 ){
      return
    }
    count.innerText = currentValue - 1;
  }



  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia(responsives.mobileS).matches) {
        setSlidesPerView(2);
        setSpaceBetween(110)
      } 
       if(window.matchMedia(responsives.mobileL).matches){
        setSpaceBetween(50);
      }
      if (window.matchMedia(responsives.tabletS).matches){
        setSpaceBetween(5)
      }
      
      if (window.matchMedia(responsives.tablet).matches){
        setSlidesPerView(3);
        setSpaceBetween(150)
      }
      if (window.matchMedia('(min-width: 900px)').matches){
        setSlidesPerView(3);
        setSpaceBetween(-50)
      }
      
      if (window.matchMedia(responsives.laptop).matches){
        setSlidesPerView(3);
        setSpaceBetween(-10)
      }
      if (window.matchMedia('(min-width: 1440px)').matches){
        setSlidesPerView(3);
        setSpaceBetween(-260)
      }
      if (window.matchMedia(responsives.desktop).matches){
        setSlidesPerView(3);
        setSpaceBetween(-210)
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <Container 
        plates = {plates}
        {...rest}>

            {!isAdmin ? 
            <Swiper
            spaceBetween={spaceBetween}
            slidesPerView = {slidesPerView}
            navigation
            className="swiper-container"
            >

            {plates && plates.map(plate => (
             
             <SwiperSlide className="swiper-slide"  key={String(plate.plate_id)} >
            <div  className="mealsActive admin">
            <div className="content-meals">

                <img onClick={() => handleEdit(plate.plate_id)}  id="edit"  src={buttonEdit} alt="coração favoritos" />
                <img  onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                <h1 id="snackName">{`${plate.name} >` }</h1>
                <p>{`${plate.description}`}</p>
                <h2>{`R$ ${plate.price}`}</h2>

                </div>
               </div>
               </SwiperSlide>
               ))}
               </Swiper>
               :
            

             
               <Swiper
               spaceBetween={spaceBetween}
               slidesPerView = {slidesPerView}
               navigation
               className="swiper-container"

               >
   
               {plates && plates.map(plate => (
                
                <SwiperSlide className="swiper-slide" key={String(plate.plate_id)} >
               <div  className="mealsActive not-admin">
                <div className="content-meals">

                   <img onClick={() => {}}  id="edit"  src={favorites} alt="coração favoritos" />
                   <img  onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                   <h1 id="snackName">{`${plate.name} >` }</h1>
                   <p>{`${plate.description}`}</p>
                   <h2>{`R$ ${plate.price}`}</h2>

                   </div>
                   <div id="includs">
                    <div>
                    <img onClick={() => decreaseValue(plate.plate_id)} src={imgButtonLess} alt="botao de diminuir" />
                    <h3 id= {`counter-${plate.plate_id}`}>{count}</h3>
                    <img onClick={() => increaseValue(plate.plate_id)}  src={imgButtonMore} alt="botao de incluir"  />
                    
                    </div>
                    <Button 
                    title={"incluir"}
                    />
                    
                </div>
                   
                  </div>
                  </SwiperSlide>
                  ))}
                  </Swiper>
}
            
            
        </Container>
    )
}