import React from "react";
import styled from "styled-components";
const Logo = ({ image, details }) => {
  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Details>{details}</Details>
    </Container>
  );
};

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: #fff;
  height: 60px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  align-items: center;
  margin: 0 8px;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
const Details = styled.Text`
  text-align: left;
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
