import { Container } from "./style";
import { Page } from "./style";
import { api } from "../../services/api";


import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banners } from "../../components/Banners";
import { Meals } from "../../components/Meals";
import { InputHeader } from "../../components/InputHeader";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { FiSearch } from "react-icons/fi";

export function Home(){
    const {user} = useAuth();
    const navigation = useNavigate();
    const [search, setSearch] = useState("");
    const [mealCategory, setMealCategory] = useState([]);
    const [drinkCategory, setDrinkCategory] = useState([]);
    const [dessertCategory, setDessertCategory] = useState([]);

    console.log(user.admin)

    
    
    useEffect(() => {
        async function fetchDishes(){
            const response  = await api.get(`/plates?name=${search}`)
            const dishes = response.data
            const mealItems = dishes.filter( dish => dish.category === 'Refeição')
        
              const drinkItems = dishes.filter(dish => dish.category === 'Bebidas')
        
              const dessertItems = dishes.filter(dish => dish.category === 'Sobremesa')

              setMealCategory(mealItems);
              setDessertCategory(dessertItems);
              setDrinkCategory(drinkItems);

              
        }



        fetchDishes();
    }, [search])

    return(

        <Container>
        <div className="home">    
        <Header
        search={e => setSearch(e.target.value)}
        />

        <Page>
        
        <Banners 
        className = "banner"/>
        <div className="inputMobile">
            <InputHeader
            onChange={e => setSearch(e.target.value)}
            onClick={() => navigation("/")}
            type = "text"
            icon={FiSearch}
            placeholder = "Busque por pratos ou ingredientes"
             />
            </div>

        <div className="foods">
            {mealCategory.length > 0 ?
                <h1  className="category">Refeições
                </h1>
                :
                ""
            }

        <main className="content">
            
        <Meals 
        plates={mealCategory}/>
        
        </main>
        </div>
        <div className="foods">
            {dessertCategory.length > 0 ?
                <h1 className="category">
                    Sobremesas
                </h1>
                :
                ""
            }

        <main className="content">
            
        <Meals 
        plates={dessertCategory}/>
        
        </main>
        </div>

        <div className="foods">
            {drinkCategory.length > 0 ?
                <h1 className="category">
                    Bebidas
                </h1>
                :
                ""
            }

        <main className="content">
            
        <Meals 
        plates={drinkCategory}/>
        
        </main>
        </div>


        </Page>

        <Footer />
        </div>
        </Container>
        

    )

}