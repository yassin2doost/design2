import React from "react";
import styled from "styled-components";

const Courses = ({ image, logo, subtitle, title, avatar, caption, author }) => {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Logo source={logo} resizeMode="contain" />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Cover>
      <Content>
        <Avatar source={avatar} />
        <Caption>{caption}</Caption>
        <Author>مدرس: {author}</Author>
      </Content>
    </Container>
  );
};

export default Courses;
const Container = styled.View`
  width: 335px;
  height: 335px;
  background: white;
  margin: 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
  font-family: IRANSansMobile;
`;

const Subtitle = styled.Text`
  text-align: left;
  margin-left: 20px;
  margin-top: -14px;
  padding-bottom: 12px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  font-family: IRANSansMobile;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  text-align: left;
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  font-family: IRANSansMobile;
`;

const Author = styled.Text`
  text-align: left;
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
  font-family: IRANSansMobile;
`;
