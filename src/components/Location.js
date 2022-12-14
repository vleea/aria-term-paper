import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;
const Title = styled.h1`
  margin-bottom: 35px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const LocationContainer = styled.div`
  width: 100%;
  height: 90px;
`;

const Location = () => {
    return (
        <Container>
            <Title>I'm waiting for you to visit me!</Title>
            <LocationContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20979.317828707815!2d24.680001755986623!3d48.90749023289409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78ca488e28b27e5f!2sVul.%20Slobids%CA%B9ka%2C%2021!5e0!3m2!1sen!2sua!4v1670791321386!5m2!1sen!2sua"
                    width="1500" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </LocationContainer>
        </Container>
    );
};

export default Location;