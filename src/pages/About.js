import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Location from "../components/Location";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 95%
`
const InfoContainer = styled.div`
  flex: 2;
  padding: 120px;
`
const Title = styled.h1`
  font-size: 70px
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
`


const About = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <InfoContainer>
                    <Title>HI, STRANGER</Title>
                    <Desc> You've probably heard many times that you can express yourself with the help of clothes.<br/>
                        Having visited many countries and cities, during Fashion Weeks in the main fashion capitals of the world, I once again confirmed to myself that clothes are more than just a daily "uniform".<br/>
                        The way you combine clothes reflects you as a person. I guess that Your personality is multifaceted, isn't it?<br/>
                        I want to be different, but at the same time remain myself, be the one who will surprise a random stranger with her image and will be remembered for her uniqueness, ease, confidence, craziness and unpredictability.</Desc>
                </InfoContainer>
                <ImgContainer>
                    <Image src="/imgs/collections/THE DRESS.jpeg"/>
                </ImgContainer>
            </Container>
            <Container>
                <ImgContainer>
                    <Image src="/imgs/collections/THE DRESS.jpeg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Lovely to meet you</Title>
                    <Desc>I have always imagined the ideal item I would like to wear. Therefore, I've decided to bring my ideas to life and have been doing this for two years now. <br/>
                        In 2018, I created my own clothing brand to make you feel special.<br/>
                        I use the highest quality material, so that you feel comfortable. From the first personal acquaintance with DM, you will be convinced that stylish clothes can be comfortable, the one you don't want to get out of.<br/>
                        Remember that your image says much more about you than you think. You can easily make a completely different impression of yourself without words.</Desc>
                </InfoContainer>
            </Container>

            <Location/>
        </div>

    )
}
export default About