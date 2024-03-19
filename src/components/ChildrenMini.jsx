import { useContext } from 'react';
import { GlobalContext } from '../contexts/Todos';

export default function GetTodos() {
  const valueContext = useContext(GlobalContext);
  console.log(valueContext);
}
