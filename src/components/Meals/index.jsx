import { Container } from "./style";  


import { IoMdHeartEmpty } from 'react-icons/io'
import {IoMdHeart} from 'react-icons/io'
import buttonEdit from "../../Assets/buttonEdit.svg"
import imgButtonLess from "../../Assets/less.svg"    
import imgButtonMore from "../../Assets/more.svg" 

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import {register} from 'swiper/element/bundle'
register()
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { responsives } from "../../Configs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UseCart } from "../../hooks/cart";




export function Meals ({plates, ...rest}) {
    const navigation = useNavigate();
    const {user} = useAuth();
    const {addPlateToCart} = UseCart()

    const isAdmin = user.admin;


    const [slidesPerView, setSlidesPerView] = useState(1.8)
    const [spaceBetween, setSpaceBetween] = useState(15)

    const [countPerPlate, setCountPerPlate] = useState({});

  function increaseValue(plateId) {
    
    setCountPerPlate((prevState) => ({
      ...prevState,
      [plateId]: (prevState[plateId] || 0) + 1,
    }));
  }

  function decreaseValue(plateId) {
    setCountPerPlate((prevState) => ({
      ...prevState,
      [plateId]: Math.max(0, (prevState[plateId] || 0) - 1),
    }));
  }

     
    function handleDetails(id) {
      navigation(`/plates/${id}`);
  }


    function handleEdit(id) {
      navigation(`/edit/${id}`);
  }

  async function handleFavorite(id){
    try{
       await api.post(`/favorites/${id}`)
       toast.success("Favorito adicionado com sucesso!")
    }
     catch(error){
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("Não foi possível adicionar o prato aos favoritos.")
      }
    }
           
  }


  useEffect(() => {
    const handleResize = () => {
       if(window.matchMedia(responsives.mobileS).matches){
        setSpaceBetween(15);
      }
      if (window.matchMedia(responsives.tablet).matches){
        setSlidesPerView(3)
        setSpaceBetween(25)
      }
      if (window.matchMedia('(min-width: 900px)').matches){
        setSlidesPerView(3.5);
      }
      
      if (window.matchMedia(responsives.laptopL).matches){
        setSlidesPerView(3.5);
      }
      
      if (window.matchMedia(responsives.desktop).matches){
        setSlidesPerView(3.8)
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

            {isAdmin ? 
            <Swiper
               touchRatio={0.5}
               speed={1000}
               slidesPerView={slidesPerView}
               spaceBetween={spaceBetween}
               navigation={true}
               modules={[ Navigation]}
               className="mySwiper"
            >

            {plates && plates.map(plate => (
             
             <SwiperSlide className="mealsActive admin"  key={String(plate.plate_id)} >
            <div className="content-meals">
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
               touchRatio={0.5}
               speed={1000}
               slidesPerView={slidesPerView}
               spaceBetween={spaceBetween}
               navigation={true}
               className="mySwiper"
                  >
   
               {plates && plates.map(plate => (
                
                <SwiperSlide className="mealsActive not-admin" key={String(plate.plate_id)} >
                <div className="content-meals">
                  
                   <IoMdHeart size={40} id={`edit`} onClick={() => handleFavorite(plate.plate_id)} />
                    <img  onClick={() => handleDetails(plate.plate_id)} id="snack" src={`${api.defaults.baseURL}/files/${plate.img}`} alt="imagem do prato " />
                    <h1 id="snackName">{`${plate.name} >` }</h1>
                    <p>{`${plate.description}`}</p>
                    <h2>{`R$ ${plate.price}`}</h2>

                   </div>
                  <div id="includs">
                    <div>
                      <img onClick={() => decreaseValue(plate.plate_id)} src={imgButtonLess} alt="botao de diminuir" />
                      <h3 id= {`counter`}>{countPerPlate[plate.plate_id] || 0}</h3>
                      <img onClick={() => increaseValue(plate.plate_id)}  src={imgButtonMore} alt="botao de incluir"  />
                  </div>
                    <Button 
                    onClick={() => {addPlateToCart(plate, countPerPlate[plate.plate_id] || 0 )}}
                    
                    
                      
                    title={"incluir"}
                    />
                  </div>
                  </SwiperSlide>
                  ))}
                  </Swiper>
}
            
            
        </Container>
    )
}