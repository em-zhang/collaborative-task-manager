import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from './InMemoryApp';

const initialData = [
    {
        taskId: 0,
        taskLabel: "Get lunch at dining hall",
        isCompleted: true
    },
    {
        taskId: 1,
        taskLabel: "Buy textbooks",
        isCompleted: false
    },
    {
        taskId: 2,
        taskLabel: "Watch videos about React",
        isCompleted: true
    },
    {
        taskId: 3,
        taskLabel: "Call Mom",
        isCompleted: false
    },
    {
        taskId: 4,
        taskLabel: "Meet with Prof. Rhodes",
        isCompleted: false
    },
];

ReactDOM.render(
  <React.StrictMode>
      <InMemoryApp initialData={initialData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
