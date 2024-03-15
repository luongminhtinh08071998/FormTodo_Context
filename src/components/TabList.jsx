/* eslint-disable react/prop-types */
import { Flex, Input, Button, Checkbox } from 'antd';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/Todos';

export default function TabList(props) {
  const valueContext = useContext(GlobalContext);
  const { todo, setTodo, setTodos, handleCheckbox, handleAdd } = props;

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
        {valueContext?.map((data) => (
          <Checkbox key={data.id} onChange={handleCheckbox(data.id)}>
            <p
              style={{
                textDecoration: `${data.checked ? 'line-through' : 'none'}`,
              }}
            >
              {data.name}
            </p>
          </Checkbox>
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
