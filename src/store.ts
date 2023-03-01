import { createContext, useContext } from 'react';

import dateHolder from './services/date.service';
import todoHolder from './services/todo.service';
const store = {
  dateStore: dateHolder,
  formStore: todoHolder
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};
export default store;
