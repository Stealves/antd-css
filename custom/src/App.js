import './App.less';
import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Space direction='vertical'>
          <Button class='button'  style={{ color: 'yellow' }} type='primary'>Button</Button>
          <Input placeholder='Type here...'></Input>
          <Progress percent={50} type='circle' />
          <Spin spinning />
          <DatePicker />
          <Slider />
        </Space>
      </header>
    </div>
  );
}

export default App;
