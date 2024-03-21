import { Flex, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/Todos';
import { Typography } from 'antd';
import GetTodos from './ChildrenMini';

const { Text } = Typography;

export default function TabComplete() {
  const { todos, setTodos } = useContext(GlobalContext);

  function handleToggleComplete(id) {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  }

  return (
    <>
      <Flex gap="small">
        <Input placeholder="Please enter todo" />
        <Button>Search</Button>
      </Flex>
      <br />
      <Flex vertical="column">
        {todos.map(
          (todo) =>
            todo.checked && (
              <>
                <Flex justify="space-between" align="center">
                  <Text key={todo.id}>{todo.name}</Text>
                  <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => handleToggleComplete(todo.id)} />
                </Flex>
              </>
            )
        )}
      </Flex>
      <GetTodos />
    </>
  );
}