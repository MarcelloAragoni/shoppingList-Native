import AsyncStorage from "@react-native-async-storage/async-storage";

export type TaskType = {
  id: string;
  name: string;
};

export const STORAGE_KEY_TASK_LIST = "NEW_KEY_TASK_LIST_4";

export const getItemFromStorage = async (key: string) => {
  const items = await AsyncStorage.getItem(key);

  console.log({ items });

  return items || [];
};

export const setItemToStorage = async (key: string, value: TaskType[]) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};
