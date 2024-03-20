import { Flex, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/Todos';
import { Typography } from 'antd';
import GetTodos from './ChildrenMini';

const { Text } = Typography;

export default function TabComplete() {
  const valueContext = useContext(GlobalContext);
  const setTodos = useContext(GlobalContext.setTodos); 

  const handleToggleComplete = (id) => {
    const updatedTodos = valueContext.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: todo.checked };
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log("🚀 ~ handleToggleComplete ~ updatedTodos:", updatedTodos)
  };

  // TODO: i cann't do del todo here, because code re rach khong hieu gi :(((

  return (
    <>
      <Flex gap="small">
        <Input placeholder="Please enter todo" />
        <Button>Search</Button>
      </Flex>
      <br />
      <Flex vertical="column">
        {valueContext.map(
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
