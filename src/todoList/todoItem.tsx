import * as Styled from "./todoList.styled";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TodoItem({ item }: any) {
  const [isSelected, setSelection] = useState(false);

  return (
    <Styled.ItemList>
      <BouncyCheckbox
        style={{ padding: 15 }}
        isChecked={isSelected}
        text={item}
        textStyle={{
          color: "#fff",
        }}
        innerIconStyle={{
          borderColor: "green",
          borderRadius: 6, // to make it a little round increase the value accordingly
        }}
        fillColor="transparent"
        disableBuiltInState
        onPress={() => setSelection(!isSelected)}
      />
    </Styled.ItemList>
  );
}
