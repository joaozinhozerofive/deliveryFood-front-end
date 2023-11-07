import  { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages Comum/Home';
import { NewPlate } from '../Pages Adm/NewPlate';
import { Dishes } from '../Pages Comum/Dishes';
import { EditPlate } from '../Pages Adm/EditPlate';
import { Menu } from '../Pages Comum/Menu';
import { Favorites } from '../Pages Comum/Favorites';
import { Cart } from '../Pages Comum/Cart';
import { Orders } from '../Pages Comum/Orders';
import { OrdersAdmin } from '../Pages Adm/OrdersAdmin';


export function AppRoutes(){
    return(
        <Routes>
            <Route path= '/' element= {<Home/> } />
            <Route path= '/new' element={<NewPlate/> } />
            <Route path= '/edit/:plate_id' element={<EditPlate/> } />
            <Route path= '/plates/:plate_id' element={<Dishes/> } />
            <Route path= '/menu' element={<Menu/> } />
            <Route path= '/favorites' element={<Favorites/> } />
            <Route path= '/checkout' element={<Cart/> } />
            <Route path= '/histórico-de-pedidos' element={<Orders/> } />
            <Route path= '/pedidos' element={<OrdersAdmin/> } />
        </Routes>
    )
}