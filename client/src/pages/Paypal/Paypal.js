import React, { useEffect, useRef } from 'react'
import { bindActionCreators } from 'redux'

const Paypal = () => {
    const paypal= useRef()
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data , action , err)=>{
                return action.order.create({
                    intent: " CAPTURE" , 
                    /* purchase_units : [
                        {
                            description:"Cool looking table ",
                            ammount:{
                                currency_order:"TND",
                                value : 650.00

                            }
                        }
                    ] */
                })
            },
            onApprove : async (data , action ) =>{
                const order = await bindActionCreators.order.capture()
                console.log("Succefully order" + order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    },[])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default Paypal
