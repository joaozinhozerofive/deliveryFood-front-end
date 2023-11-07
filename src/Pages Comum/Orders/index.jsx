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




export function Orders({plate, ...rest}){
    const [data, setData] = useState()
    const {user} = useAuth();



    function formatDate(dateTimeString) {
        const options = { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateTimeString);
        const formattedDate = date.toLocaleString('pt-BR', options);
        return formattedDate.replace(',', ' às');
      }


      

console.log(data)

useEffect(()=>{


     async function fetchOrders(){
        const response = await api.get("/orders")

        setData(response.data)





        

    }


    fetchOrders()

}, [user,])

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
            {data && data.map(orders  => (
                <tr key={orders.order.order_id}>
                    <td className="status" >
                    {orders.order.status === "Pendente" ? (
                            <span><img src={pendenteStatus} alt="" /> Pendente</span>
                        ) : (orders.order.status === "Preparando" ? (
                            <span><img src={preparandoStatus} alt="" /> Preparando</span>
                        ) : (orders.order.status === "Pronto" ? (
                            <span><img src={prontoStatus} alt="" /> Pronto</span>
                        ): (
                            orders.order.status === "Entregue" ? (
                                <span><img src={entregueStatus} alt="" /> Entregue</span>
                            ) : null
                        ))
                        )
                    }

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
        {data && data.map(orders => (


        <table className="tableMobile" key={String(orders.order.order_id)}>
                <tr>
                    <td>{String(orders.order.order_id).padStart(8, '0')}</td>
                    <td className="status" >
                    {orders.order.status === "Pendente" ? (
                            <span><img src={pendenteStatus} alt="" /> Pendente</span>
                        ) : (orders.order.status === "Preparando" ? (
                            <span><img src={preparandoStatus} alt="" /> Preparando</span>
                        ) : (orders.order.status === "Pronto" ? (
                            <span><img src={prontoStatus} alt="" /> Pronto</span>
                        ): (
                            orders.order.status === "Entregue" ? (
                                <span><img src={entregueStatus} alt="" /> Entregue</span>
                            ) : null
                        ))
                        )
                    }
                    </td>
                    <td>{formatDate(orders.order.created_at)}</td>
                </tr>

                <tr>
                    <p
                    className="items">
                    {orders.items && orders.items.map((item, index) => (
                        <span key={String(index)}>{`${item.quantity} x ${item.name}, `}</span>
                    ))}
                    </p>
                </tr>

        </table>
        ))}

            </Page>
            
            <Footer className = 'newFooter' />
            
        </Container>
    )

}