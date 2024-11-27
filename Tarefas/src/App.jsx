import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Text from "./components/Text";
import Input from "./components/Input";
import Button from "./components/Button";
import Img from "./components/Img";

function App() {
  const [text, setText] = useState(""); // Variável para o texto do input
  const [tasks, setTasks] = useState([]); // Lista de tarefas

  const addTask = () => {
    if (text.trim()) {
      // Verifica se o texto não está vazio
      setTasks([...tasks, { text: text, completed: false }]);
      setText(""); // Limpa o input
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container className="container">
      <Container className="c-container">
        <Input
          className="input"
          type="text"
          placeholder="Type here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="create" onClick={addTask}>
          +
        </Button>
      </Container>

      <Container className="t-container">
        {tasks.map((task, index) => (
          <Container
            key={index}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <Text onClick={() => toggleTask(index)}>{task.text}</Text>
            <Button className="delete" onClick={() => deleteTask(index)} >
              <Img className="trash" src="trash-fill.svg" alt="trash" />
              <Text className="trash-button">Delete</Text>
            </Button>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default App;
