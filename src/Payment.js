import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";
import Orders from './Orders';

function Payment() {
    const [isDone, setIsDone] = useState(false);
    const [process, setProcess] = useState("Processing")
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [totalIds, setTotalIds] = useState([]);
    // const [newId, setNewId] = useState("");

    async function generateId(){
        var id = Math.floor(Math.random()*10);
        totalIds.forEach((item, index)=> {
           if(item==id){
               generateId();
           }else{
               setTotalIds(...[id]);
                return id;
            }
        }
        )
        
    }


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    function handleProcess(){
        setIsDone(true);
        setInterval(()=> setProcess("Done"), 3000);
        setInterval(()=> history.push("/"), 4000);
    }

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent }) => {
        //     // paymentIntent = payment confirmation

        //     setSucceeded(true);
        //     setError(null)
        //     setProcessing(false)
           const newId =  await generateId();
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(newId)
            .set({
                basket: basket,
                amount: getBasketTotal(basket),
                // created: paymentIntent.created
            })

            dispatch({
                type: 'EMPTY_BASKET'
            })

            // history.replace('Orders')
        // })

    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Knit College</p>
                        <p>Sultanpur,UttarPraesh</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button onClick={handleProcess} disabled={processing || disabled || succeeded}>
                                     {isDone?  
                                        <span> <p>{process}</p></span>:
                                        <span> <p>BuyNow</p></span>
                                        /* <span>{processing ? <p>Processing</p> : "Buy Now"}</span> */
                                     }
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
