import React from "react";
import { Container, IconView, Title, Text, Content } from "./style";
import Icon from "../Icon";

const MenuItem = ({ title, icon, text, size }) => (
  <Container>
    <IconView style={{ justifyContent: "center", marginTop: 9 }}>
      <Icon name={icon} size={size} color="#000" />
    </IconView>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Container>
);

export default MenuItem;
