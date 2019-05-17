import React from "react";
import styled from "styled-components";

const Card = ({ title, image, caption, subtitle, background }) => (
  <Container>
    <Cover>
      <Image source={background} />
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Logo source={image} />
      <Wrapper>
        <Caption>{caption}</Caption>
        <Subtitle> {subtitle} </Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
  font-family: IRANSansMobile;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 4px;
  text-align: left;
  font-family: IRANSansMobile;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Container = styled.View`
  background: white;
  width: 285px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  text-align: left;
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  font-family: IRANSansMobile;
`;
