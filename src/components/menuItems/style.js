//MenuItem Components
import styled from "styled-components";

export const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

export const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  padding-left: 20px;
`;

export const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
  font-family: IRANSansMobile;
  text-align: left;
`;

export const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
  font-family: IRANSansMobile;
  text-align: left;
`;
