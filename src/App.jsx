import { Tabs } from 'antd';
import './index.css';
import { useState } from 'react';
import { GlobalContext } from './contexts/Todos';
import TabList from './components/TabList';
import TabComplete from './components/TabComplete';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), name: todo, checked: false }]);
    setTodo('');
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
        // <>
        //   <Flex gap="small">
        //     <Input
        //       placeholder="Please enter todo"
        //       value={todos}
        //       onChange={(e) => setTodos(e.target.value)}
        //     />
        //     <Button type="primary" onClick={handleAdd}>
        //       Add
        //     </Button>
        //   </Flex>
        //   <br />
        //   <Flex vertical="column">
        //     {addTodo.map((data) => (
        //       <Checkbox key={data.id} onChange={handleCheckbox(data.id)}>
        //         <p
        //           style={{
        //             textDecoration: `${data.checked ? 'line-through' : 'none'}`,
        //           }}
        //         >
        //           {data.name}
        //         </p>
        //       </Checkbox>
        //     ))}
        //   </Flex>
        //   <br />
        //   <Flex gap="small" justify="end">
        //     <Button danger type="primary" onClick={() => setDataAdd([])}>
        //       Delete All
        //     </Button>
        //   </Flex>
        // </>
      ),
    },
    {
      key: '2',
      label: 'Completed',
      children: (
        <TabComplete />
        // <>
        //   <Flex gap="small">
        //     <Input placeholder="Please enter todo" />
        //     <Button>Search</Button>
        //   </Flex>
        //   <br />
        //   <Flex vertical="column">
        //     <Flex justify="space-between" align="center">
        //       <Text>Learn javascript</Text>
        //       <Button danger shape="circle" icon={<DeleteOutlined />} />
        //     </Flex>
        //     <Flex
        //       justify="space-between"
        //       align="center"
        //       style={{ marginTop: 5 }}
        //     >
        //       <Text>Learn angular</Text>
        //       <Button danger shape="circle" icon={<DeleteOutlined />} />
        //     </Flex>
        //   </Flex>
        // </>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <GlobalContext.Provider value={todos}>
      <div className="App">
        <h1>Todo Tracker</h1>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </GlobalContext.Provider>
  );
}
