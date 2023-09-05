/* eslint-disable react/react-in-jsx-scope */
import * as Styled from "./input.styled";
import { AppButton } from "../button";
import {
  STORAGE_KEY_TASK_LIST,
  getItemFromStorage,
  setItemToStorage,
} from "../todoList/utils";

export function ListInput({ task, onChange, getList }: any) {
  async function onSubmit() {
    const newTask = {
      id: `${Math.floor(Date.now() * Math.random()).toString(36)}`,
      name: task,
    };

    const currentTaskList = await getItemFromStorage(STORAGE_KEY_TASK_LIST);

    let updatedTaskList = [];

    if (currentTaskList && currentTaskList.length > 0) {
      const currentTasksParse = JSON.parse(currentTaskList as any);

      updatedTaskList = [...currentTasksParse, newTask];
    } else {
      updatedTaskList = [newTask];
    }

    setItemToStorage(STORAGE_KEY_TASK_LIST, updatedTaskList);

    getList();
  }

  return (
    <Styled.Container>
      <Styled.TitleText>Todo List</Styled.TitleText>
      <Styled.FormContainer>
        <Styled.InputArea
          placeholder={"Type your Todo Task"}
          value={task}
          onChangeText={onChange}
        />
        <AppButton title="ADD" onPress={onSubmit} />
      </Styled.FormContainer>
    </Styled.Container>
  );
}
