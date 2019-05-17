// Menu components

import styled from "styled-components";
import { Animated, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export const Container = styled.View`
  position: absolute;
  background: white;
  align-self: center;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const Content = styled.View`
  height: ${SCREEN_HEIGHT};
  background: #f0f3f5;
  padding: 50px;
`;
// Parent OF Image and title and Subtitle
export const Cover = styled.View`
  height: 250px;
  background: black;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;
export const Image = styled.Image`
  margin: 12px;
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 55px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  font-family: IRANSansMobile;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
  font-family: IRANSansMobile;
  text-align: left;
  margin-left: 8px;
`;

export const CloseView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
`;
