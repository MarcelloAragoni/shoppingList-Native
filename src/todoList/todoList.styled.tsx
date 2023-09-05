import styled from "styled-components/native";
import { AppButton } from "../button";

export const TodoList = styled.View`
  margin-top: 25px;
  margin-right: 25px;
`;

export const ListView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const ItemList = styled.View`
  flex: 4;
  background-color: #2e2e2e;
  border-radius: 15px;

  width: 100%;
`;

export const Item = styled.Text`
  padding: 20px;
  align-items: center;
  color: white;
`;

export const ListAppButton = styled(AppButton)``;
