import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

<div className="checklist">
    <label>
        <input type="checkbox" name="checkbox" value="task"/>
        <span>Buy new John Grisham book</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox" value="task"/>
        <span>Get car washed</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox" value="task"/>
        <span>Order textbooks</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox" value="task" checked/>
        <span>Call Mom</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox" value="task"/>
        <span>Text John about bank statements</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox" value="task"/>
        <span>Fix laptop</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox" value="task" checked/>
        <span>Eat lunch</span>
    </label>
</div>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
