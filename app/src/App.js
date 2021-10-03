// import logo from './logo.svg';
import './App.css';
import './index.js';
import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddToDo"
import AddToDo from "./components/AddToDo"
import {useState, useEffect} from "react";

function App() {
    return (
        <div className="App">
            <div class="heading">
                <h1>- Task Manager -</h1>
            </div>
            <div class="container">
                <h2>My Tasks</h2>
            </div>
            {/*<div class="add-button">*/}
            {/*</div>*/}
            {/*<div class="add-task">*/}
            {/*    <AddTask/>*/}
            {/*</div>*/}
            <div className="todo-list">
                <ToDoList/>
            </div>
        </div>
    );
}

export default App;


// function Person(props) {
//     let className ="person";
//     const [fullOpacity, setFullOpacity] = useState(false);
//     useEffect(() => {
//         if (props.selected) {
//             const timer = setTimeout(() => setFullOpacity(!fullOpacity), 1000);
//             return () => clearTimeout(timer);
//         }
//
//     });
//     return <div id={props.id} className={props.selected ? (fullOpacity? "selectedPerson100" : "selectedPerson50") : className} onClick={props.onPersonClicked}>
//         <div className="name">{props.name}</div>
//         <div className="email">{props.email}</div>
//         <div className="phone">{props.phone}</div>
//     </div>
// }
//
// function People(props) {
//
//     const [selectedID, setSelectedID] = useState(null);
//     const persons = props.peopleList.map(e => <Person onPersonClicked={() => setSelectedID(e.id)}name={e.name} email={e.email}
//                                                       phone={e.phone} id={e.id} selected={selectedID === e.id}/>);
//     return <div>
//             <h2> Tasks selected {selectedID ? 1 :0}/{data.length} selected</h2>
//         {persons}
//     </div>;
// }