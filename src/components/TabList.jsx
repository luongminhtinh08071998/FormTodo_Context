/* eslint-disable react/prop-types */
import { Flex, Input, Button, Checkbox } from 'antd';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/Todos';
import '../index.css';
import { DeleteOutlined } from '@ant-design/icons';

function TabList(props) {
  const {todos} = useContext(GlobalContext);
  const { setTodos, todo, setTodo, handleCheckbox, handleAdd } = props;

  function handleDelete(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  return (
    <>
      <Flex gap="small">
        <Input
          placeholder="Please enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button type="primary" onClick={handleAdd}>
          Add
        </Button>
      </Flex>
      <br />
      <Flex vertical="column">
      {todos?.map((data) => (
        <Flex key={data.id} align="center" justify="space-between">
          <Checkbox onChange={handleCheckbox(data.id)} checked={data.checked}>
            <p
              style={{
                textDecoration: `${data.checked ? 'line-through' : 'none'}`,
              }}
            >
              {data.name}
            </p>
          </Checkbox>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(data.id)} />
        </Flex>
      ))}
      </Flex>
      <br />
      <Flex gap="small" justify="end">
        <Button danger type="primary" onClick={() => setTodos([])}>
          Delete All
        </Button>
      </Flex>
    </>
  );
}

export default TabList;