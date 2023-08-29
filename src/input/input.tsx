/* eslint-disable react/react-in-jsx-scope */
import { Alert, Button } from "react-native";
import { useForm } from "react-hook-form";
import * as Styled from "./input.styled";
import { useEffect } from "react";

export function ListInput() {
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (data: { todoItem: string }) => Alert.alert(data.todoItem);

  useEffect(() => {
    register("todoItem");
  }, [register]);

  return (
    <Styled.Container>
      <Styled.TitleText>Todo List</Styled.TitleText>
      <Styled.FormContainer>
        <Styled.InputArea
          placeholder={"Type your Todo Task"}
          onChangeText={(text) => setValue("todoItem", text)}
        />
        <Button onPress={handleSubmit(onSubmit)} title="Add" color="#fff" />
      </Styled.FormContainer>
    </Styled.Container>
  );
}
