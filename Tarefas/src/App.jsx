import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Text from './components/Text';
import Input from './components/Input';
import Button from './components/Button';

function App() {

  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task,trim()) {
      setTasks([...tasks, {text: text, completed: false}])
      setText("") //clean input
    }
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  const tex = <Text classNam="text">text</Text>

  const cont = <Container className="ts-container">{{tex}}</Container>

  return (
  <Container className="container">
    <Container className="c-container">
      <Input className="input" type="text" placeholder="Type here" onCharge={(e) => setText(e.target.value)}/>
      <Button className="create" onClick={addTask}>+</Button>
    </Container>
    <Container className="t-container">
      
    </Container>
  </Container>
  )
}

export default App;
