import React, {useEffect, useState} from "react";
import CardItem from "../components/CardItem";
import Navbar from "../components/Navbar";

const Products = () => {
    const itemList = [
        {id: 1, name: "Cephea dress-1", imgurl: "/imgs/collections/Cephea dress-1.webp", price: 70, added: 0},
        {id: 2, name: "HAKAMA DRESS-1", imgurl: "/imgs/collections/HAKAMA DRESS-1.webp", price: 50, added: 0},
        {id: 4, name: "Eos-1", imgurl: "/imgs/collections/Eos-1.webp", price: 55, added: 0},
        {id: 20, name: "Chiffon-off Dress-1", imgurl: "/imgs/collections/Chiffon-off Dress-1.webp", price: 45, added: 0},
        {id: 9, name: "Wave-olution Dress-1", imgurl: "/imgs/collections/Wave-olution Dress-1.webp", price: 45, added: 0},
        {id: 14, name: "PLANKTON SUIT-1", imgurl: "/imgs/collections/PLANKTON SUIT-1.webp", price: 60, added: 0},
        {id: 5, name: "HADLEY SWEATER DRESS-1", imgurl: "/imgs/collections/HADLEY SWEATER DRESS-1.webp", price: 45, added: 0},
        {id: 7, name: "Aphorismus Top & Trousers-1", imgurl: "/imgs/collections/Aphorismus Top & Trousers-1.webp", price: 45, added: 0},
        {id: 6, name: "Anti Phobia Set-1", imgurl: "/imgs/collections/Anti Phobia Set-1.webp", price: 40, added: 0},
        {id: 8, name: "XTRA WHITE SET-1", imgurl: "/imgs/collections/XTRA WHITE SET-1.webp", price: 60, added: 0},
        {id: 11, name: "Generation.X-1", imgurl: "/imgs/collections/Generation.X-1.webp", price: 45, added: 0},
        {id: 3, name: "Ardent-1", imgurl: "/imgs/collections/Ardent-1.webp", price: 60, added: 0},
        {id: 13, name: "Silver Snake Panama-1", imgurl: "/imgs/collections/Silver Snake Panama-1.webp", price: 20, added: 0},
        {id: 12, name: "TRIVIAL DRESS-1", imgurl: "/imgs/collections/TRIVIAL DRESS-1.webp", price: 50, added: 0},
        {id: 16, name: "METALLIC DRESS-1", imgurl: "/imgs/collections/METALLIC DRESS-1.webp", price: 70, added: 0},
        {id: 23, name: "Backless Fringe Dress-1", imgurl: "/imgs/collections/Backless Fringe Dress-1.webp", price: 45, added: 0},
        {id: 26, name: "Intergalactic Royal Dress-1", imgurl: "/imgs/collections/Intergalactic Royal Dress-1.webp", price: 50, added: 0},
        {id: 18, name: "Overall Suit-1", imgurl: "/imgs/collections/Overall Suit-1.webp", price: 45, added: 0},
        {id: 19, name: "BioMechanical Dress-1", imgurl: "/imgs/collections/BioMechanical Dress-1.webp", price: 40, added: 0},
        {id: 10, name: "Kiss my S-lip Dress-1", imgurl: "/imgs/collections/Kiss my S-lip Dress-1.webp", price: 70, added: 0},
        {id: 28, name: "Vintage Y2K Satin Ruched Mini Dress-1", imgurl: "/imgs/collections/Vintage Y2K Satin Ruched Mini Dress-1.webp", price: 55, added: 0},
        {id: 25, name: "White Platform Shoes-1", imgurl: "/imgs/collections/White Platform Shoes-1.webp", price: 35, added: 0},
        {id: 22, name: "Black lacquer Robot jacket-1", imgurl: "/imgs/collections/Black lacquer Robot jacket-1.webp", price: 45, added: 0},
        {id: 17, name: "Minerva-1", imgurl: "/imgs/collections/Minerva-1.webp", price: 20, added: 0},
        {id: 24, name: "Double Belt Assymetric Jeans with Long Sleeve Crop Top-1", imgurl: "/imgs/collections/Double Belt Assymetric Jeans with Long Sleeve Crop Top-1.webp", price: 50, added: 0},
        {id: 21, name: "COZY DYSTOPIA COAT-1", imgurl: "/imgs/collections/COZY DYSTOPIA COAT-1.webp", price: 50, added: 0},
        {id: 27, name: "Distortion Dress-1", imgurl: "/imgs/collections/Distortion Dress-1.webp", price: 40, added: 0},
        {id: 15, name: "Rumpled Asymmetric Dress-1", imgurl: "/imgs/collections/Rumpled Asymmetric Dress-1.webp", price: 40, added: 0},
    ]
    const[totalItems, setTotalItems] = useState(itemList)

    const totalPriceClick = (item) => {
        setTotalItems(prev =>
            prev.map(elem =>
                elem.id === item.id
                    ? {...elem, added: elem.added+1}
                    : elem
            )
        )
    }

    const removeItem = (item) => {
        setTotalItems(prev =>
            prev.map(elem =>
                elem.id === item.id && elem.added != 0
                    ?{...elem, added: elem.added-1}
                    :elem
            ))
    }

    const sum = totalItems.reduce((acc, item) => acc+(item.price*item.added), 0)

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(totalItems))
    }, [totalItems])


    return(
        <div>
            <Navbar/>
            <section className="container my-5">
                <div className="row">
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
                        <h3>Total cost {sum} $</h3>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {totalItems.map(item =>
                        <CardItem card = {item} key={item.id} getItem={totalPriceClick}  />
                    )}
                </div>
            </section>
        </div>
    )
}

export default Products