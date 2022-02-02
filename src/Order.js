import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Order({ order }) {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='order'>
            {/* <h1>Your Orders</h1> */}
            <h2>Order</h2>
        
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <p>Dear {user?.email} Your Order has been Successfully placed.Delivery is to expected within 3 to 4 days to address 124 Knit college, Sultanpur UttarPradesh.<br/>Thanks for ordering on Amazon ....Hope you have wonderful experience</p>
            <div>
            
            </div>
           {/* <p>{moment.unix(order.data.created).format("MMMM DO YYYY, h:mma")}</p> */}
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
