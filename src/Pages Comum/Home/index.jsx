import { Container } from "./style";
import { Page } from "./style";
import { api } from "../../services/api";


import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banners } from "../../components/Banners";
import { Meals } from "../../components/Meals";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Home(){
    const {isAdmin, user} = useAuth();
    const navigation = useNavigate()
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);
    const [mealCategory, setMealCategory] = useState([]);
    const [drinkCategory, setDrinkCategory] = useState([]);
    const [dessertCategory, setDessertCategory] = useState([]);

    console.log({userr})

    
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
              setDishes(dishes)
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

        <div className="foods">
            {mealCategory.length > 0 ?
                <h1>Refeição
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
                <h1>
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
                <h1>
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