import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Page } from "./style";

import pendenteStatus from "../../Assets/pendenteStatus.svg"
import preparandoStatus  from "../../Assets/preparandoStatus.svg"
import prontoStatus from '../../Assets/prontoStatus.svg'
import entregueStatus from '../../Assets/entregueStatus.svg'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";




export function OrdersAdmin({plate, ...rest}){
    const [data, setData] = useState()



    function formatDate(dateTimeString) {
        const options = { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateTimeString);
        const formattedDate = date.toLocaleString('pt-BR', options);
        return formattedDate.replace(',', ' às');
      }


      async function handleUpdatedStatus(e, id){
            const status = e.target.value
        try{
            await api.patch(`/orders/admin/${id}`, {status})
            toast.success(`Status do pedido ${String(id).padStart(8, '0')} atualizado com sucesso!`)
        }catch (error){
            if(error.response){
                toast.error(error.response.data.message)
            } else{
                toast.error("Não foi possível editar o status deste pedido.")
            }
        }
      }


      

console.log(data)

useEffect(()=>{


     async function fetchOrders(){
        const response = await api.get("/orders/admin")



        setData(response.data)

    }


    fetchOrders()

}, [])

    return(
        <Container>
            <Header />

            <Page>
             <h1>Pedidos</h1>


        <table className="tableDesktop">
                <thead>
                <tr>
                    <th> <p>Status</p></th>
                    <th> <p>Código</p></th>
                    <th> <p>Detalhamento</p></th>
                    <th> <p>Data e hora</p></th>
                </tr>
                </thead>
             <tbody>
     {data && data.map ((orders, index) => (            
                <tr key={String(index)} >
                    <td className="status" >
                    <select
                    onChange={e => handleUpdatedStatus(e, orders.order.order_id)}
                    >
                        <option value={ orders.order.status ? orders.order.status : "Pendente"}>{ orders.order.status ? orders.order.status : "Pendente"}</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Preparando">Preparando</option>
                        <option value="Pronto">Pronto</option>
                        <option value="Entregue">Entregue</option>
                    </select>
                    </td>
                    <td>{String(orders.order.order_id).padStart(8, '0')}</td>

                <td>
                    <p
                        className="items">
                        {orders.items && orders.items.map((item, index) => (
                            <span key={String(index)}>{`${item.quantity} x ${item.name}, `}</span>
                        ))}
                    </p>
                </td>

                <td>{formatDate(orders.order.created_at)}</td>
                </tr>
                ))} 
                </tbody>   
        </table>






{data && data.map((orders, index) => (


        <table key={String(index)} className="tableMobile">
                <tr>
                    <td>{String(orders.order.order_id).padStart(8, '0')}</td>
                   
                    <td>{formatDate(orders.order.created_at)}</td>
                </tr>

                <tr>
                     <p
                    className="items">
                    {orders.items && orders.items.map((item, index) => (
                        <span key={String(index)}>{`${item.quantity} x ${item.name}, `}</span>
                    ))}
                    </p>
                        <td className="status" >
                        <select
                            onChange={e => handleUpdatedStatus(e, orders.order.order_id)}
                        >
                                    <option value={ orders.order.status ? orders.order.status : "Pendente"}>{ orders.order.status ? orders.order.status : "Pendente"}</option>
                                    <option value="Pendente">Pendente</option>
                                    <option value="Preparando">Preparando</option>
                                    <option value="Pronto">Pronto</option>
                                    <option value="Entregue">Entregue</option>
                                </select>
                    </td>
                </tr>

        </table>
))}
            </Page>
            
            
            <Footer className = 'newFooter' />
        </Container>
    )

}