import React from "react";
import {Card, Button} from "react-bootstrap";

const CardItem = (props) => {
    const addItem = () => {
        props.getItem(props.card)
    }

    const removeItem = () => {
        props.removeItem(props.card)
    }

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card>
                <Card.Img variant="top" src={props.card.imgurl}/>
                <Card.Body>
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>{props.card.price}$</Card.Text>
                    <Button variant="outline-secondary" onClick={addItem}> + </Button>
                    <Button variant="outline-secondary" onClick={removeItem}> - </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardItem