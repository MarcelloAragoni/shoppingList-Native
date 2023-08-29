/* eslint-disable react/react-in-jsx-scope */
import * as Styled from "./input.styled";
import { ListInputType } from "./types";

export function ListInput({ onChangeText, value }: ListInputType) {
  return (
    <Styled.container>
      <Styled.input onChangeText={onChangeText} value={value} />
    </Styled.container>
  );
}
