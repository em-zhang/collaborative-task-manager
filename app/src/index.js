import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InMemoryApp from './InMemoryApp';

const initialData = [
    {
        taskId: 0,
        taskLabel: "Get lunch at Frary",
        isCompleted: true
    },
    {
        taskId: 1,
        taskLabel: "Organize finances",
        isCompleted: false
    },
    {
        taskId: 2,
        taskLabel: "Play Genshin Impact",
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

// export default initialData
