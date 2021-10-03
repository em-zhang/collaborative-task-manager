import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//
// function initialData() {
//     const initialData = [
//         {
//             todo: "go for a run",
//             isDone: true
//         },
//         {
//             todo: "feed dog",
//             isDone: false
//         },
//         {
//             todo: "call mom",
//             isDone: false
//         }];
//     return (
//         <div>
//             {initialData.map(name => <h2>{name}</h2>)}
//         </div>
//     )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// export default initialData
