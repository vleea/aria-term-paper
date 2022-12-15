import React, { useState } from 'react'
import { storage, db } from '../config/Config'
import Navbar from "../components/Navbar";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgva(255, 255, 255, 0.5)
  ),
  url ("") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/webp']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (webp, jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0)
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title>ADD PRODUCTS</Title>
                    <Form autoComplete="off" className='form-group' onSubmit={addProduct}>
                        <label htmlFor="product-name">Product Name</label>
                        <Input type="text" className='form-control' required
                               onChange={(e) => setProductName(e.target.value)} value={productName} />
                        <br />
                        <label htmlFor="product-price">Product Price</label>
                        <Input type="number" className='form-control' required
                               onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                        <br />
                        <label htmlFor="product-img">Product Image</label>
                        <Input type="file" className='form-control' id="file" required
                               onChange={productImgHandler} />
                        <br />
                        <Button type="submit" className='btn btn-dark btn-md mybtn'>ADD</Button>
                    </Form>
                    {error && <span className='error-msg'>{error}</span>}
                </Wrapper>
            </Container>
        </div>
    )
}