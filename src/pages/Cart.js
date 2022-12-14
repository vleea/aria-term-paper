import React, {useEffect, useState} from "react";
import CardItem from "../components/CardItem";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Cart = () => {
    const[items, setItems]=useState([])
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'))
        if(items){
            setItems(items)
        }
    }, [])

    return(
        <div>
            <Navbar/>
            <div>
                <section className="container">
                    <Desc>You saved the following items:</Desc>
                    <div className="row">
                        {items.map(item => {
                            if(item.added != 0){
                                return <CardItem card={item}/>
                            }
                        })}
                    </div>
                </section>

            </div>
        </div>
    )
}
export default Cart