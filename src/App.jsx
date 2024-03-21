import { Tabs } from 'antd';
import './index.css';
import { useEffect, useState } from 'react';
import { GlobalContext } from './contexts/Todos';
import TabList from './components/TabList';
import TabComplete from './components/TabComplete';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAdd = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), name: todo, checked: false }]);
      setTodo('');
    }
  };

  const handleCheckbox = (id) => (e) => {
    setTodos((prev) =>
      prev.map((data) => {
        if (data.id === id) {
          data.checked = e.target.checked;
        }
        return data;
      })
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const items = [
    {
      key: '1',
      label: 'All',
      children: (
        <TabList
          todo={todo}
          setTodo={setTodo}
          setTodos={setTodos}
          handleCheckbox={handleCheckbox}
          handleAdd={handleAdd}
        />
      ),
    },
    {
      key: '2',
      label: 'Completed',
      children: (
        <TabComplete />
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
      <GlobalContext.Provider value={{ todos, setTodos }}>
      <div className="App">
        <h1>Todo Tracker</h1>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </GlobalContext.Provider>
  );
}
