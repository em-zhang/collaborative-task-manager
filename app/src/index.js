import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InMemoryApp from './InMemoryApp';

const initialData = [
    {
        taskId: 0,
        task: "Get lunch at Frary",
        isDone: true
    },
    {
        taskId: 1,
        task: "Organize finances",
        isDone: false
    },
    {
        taskId: 2,
        task: "Play Genshin Impact",
        isDone: false
    },
    {
        taskId: 3,
        task: "Call Mom",
        isDone: false
    },
    {
        taskId: 4,
        task: "Meet with Prof. Rhodes",
        isDone: false
    },
];

ReactDOM.render(
  <React.StrictMode>
      <InMemoryApp data={initialData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// export default initialData
