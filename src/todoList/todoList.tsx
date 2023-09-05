import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoItem from "./todoItem";
import * as Styled from "./todoList.styled";
import { useEffect, useState } from "react";
import { STORAGE_KEY_TASK_LIST, TaskType, setItemToStorage } from "./utils";
import { AppButton } from "../button";
import { ListInput } from "../input";

export default function TodoList() {
  const [listItems, setListItems] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY_TASK_LIST);

      setListItems(JSON.parse(jsonValue as any));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleDeleteItem(id: string) {
    const listItemUpdated = listItems.filter(
      (item: TaskType) => item.id !== id
    );

    setListItems(listItemUpdated);
    setItemToStorage(STORAGE_KEY_TASK_LIST, listItemUpdated);
  }

  return (
    <>
      <ListInput task={newTask} onChange={setNewTask} getList={getData} />
      <Styled.TodoList>
        {listItems.map((item: TaskType) => (
          <Styled.ListView key={item.id}>
            <TodoItem item={item.name} />
            <AppButton onPress={() => handleDeleteItem(item.id)} title="DEL" />
          </Styled.ListView>
        ))}
      </Styled.TodoList>
    </>
  );
}
