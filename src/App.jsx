
import { Tabs, Input, Button, Flex, Checkbox, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './index.css';
import { useState } from 'react';

const { Text } = Typography;

export default function App() {

  const [dataAdd, setDataAdd] = useState([]);
  const [nameTodo, setNameTodo] = useState('');
  
  const handleAdd = () => {
    setDataAdd([...dataAdd, {id:Date.now(), name: nameTodo, checked: false}]);
    setNameTodo('');
  }

  const updateCheckbox = (id) => (e) => { 
    setDataAdd((prev) => prev.map((data) => {
      if(data.id === id) {
        data.checked = e.target.checked;
      }
      return data;
    }));
  }


  const items = [
    {
      key: '1',
      label: 'All',
      children: (
        <>
          <Flex gap="small">
            <Input 
              placeholder="Please enter todo" 
              value={nameTodo}
              onChange={(e) => setNameTodo(e.target.value)}
            />
            <Button type="primary" onClick={handleAdd}>Add</Button>
          </Flex>
          <br />
          <Flex vertical="column">
            {dataAdd.map((data) => (
              <Checkbox key={data.id} onChange={updateCheckbox(data.id)}>
                <p style={{
                  textDecoration: `${data.checked ? 'line-through': 'none'}`
                }}>{data.name}</p>
              </Checkbox>
            ))}
          </Flex>
          <br />
          <Flex gap="small" justify="end">
            <Button danger type="primary" onClick={() => setDataAdd([])}>
              Delete All
            </Button>
          </Flex>
        </>
      ),
    },
    {
      key: '2',
      label: 'Completed',
      children: (
        <>
          <Flex gap="small">
            <Input placeholder="Please enter todo" />
            <Button>Search</Button>
          </Flex>
          <br />
          <Flex vertical="column">
            <Flex justify="space-between" align="center">
              <Text>Learn javascript</Text>
              <Button danger shape="circle" icon={<DeleteOutlined />} />
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginTop: 5 }}
            >
              <Text>Learn angular</Text>
              <Button danger shape="circle" icon={<DeleteOutlined />} />
            </Flex>
          </Flex>
        </>
      ),
    },
  ];
  

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="App">
      <h1>Todo Tracker</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
    </div>
  );
}



