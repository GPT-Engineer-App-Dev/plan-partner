import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const TodayPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Today</h1>
        <Button onClick={addTask}>Add Task</Button>
      </header>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(index)}
                  />
                  <span className={task.completed ? "line-through" : ""}>
                    {task.title}
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          className="mr-2"
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>
    </div>
  );
};

export default TodayPage;