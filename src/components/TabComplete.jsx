import { Flex, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/Todos';
import { Typography } from 'antd';
import GetTodos from './ChildrenMini';

const { Text } = Typography;

export default function TabComplete() {
  const { todos, setTodos } = useContext(GlobalContext);

  function handleToggleComplete(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  const [searchTask, setSearchTask] = useState('');

  function handleSearch(e) {
    const newSearchTask = e.target.value;
    setSearchTask(newSearchTask);
  }

  const filteredTodos = todos.filter(todo => {
    const isSearchTask = todo.name.includes(searchTask);
    const isCompleted = todo.checked;

    return isSearchTask && isCompleted;
  });

  return (
    <>
      <Flex gap="small">
        <Input placeholder="Please enter todo" onChange={handleSearch} />
        <Button>Search</Button>
      </Flex>
      <br />
      <Flex vertical="column">
        {filteredTodos.map(todo => {
          return (
            <>
              <Flex justify="space-between" align="center">
                <Text key={todo.id}>{todo.name}</Text>
                <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => handleToggleComplete(todo.id)} />
              </Flex>
            </>
          );
        })}
      </Flex>
      <GetTodos />
    </>
  );
}