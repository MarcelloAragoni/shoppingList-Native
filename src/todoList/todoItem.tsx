import { AppButton } from "../button";
import * as Styled from "./todoList.styled";

export default function TodoItem({ item }: any) {
  return (
    <Styled.ItemList>
      <Styled.Item>{item}</Styled.Item>
    </Styled.ItemList>
  );
}
