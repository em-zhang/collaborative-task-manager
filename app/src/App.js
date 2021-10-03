// import logo from './logo.svg';
import './App.css';
import './index.js';
import {useState, useEffect} from "react";

const data = [
    {
        id: 512,
        name: "Hello Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: 787,
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];

function Person(props) {
    let className ="person";
    const [fullOpacity, setFullOpacity] = useState(false);
    useEffect(() => {
        if (props.selected) {
            const timer = setTimeout(() => setFullOpacity(!fullOpacity), 1000);
            return () => clearTimeout(timer);
        }

    });
    return <div id={props.id} className={props.selected ? (fullOpacity? "selectedPerson100" : "selectedPerson50") : className} onClick={props.onPersonClicked}>
        <div className="name">{props.name}</div>
        <div className="email">{props.email}</div>
        <div className="phone">{props.phone}</div>
    </div>
}

function People(props) {

    const [selectedID, setSelectedID] = useState(null);
    const persons = props.peopleList.map(e => <Person onPersonClicked={() => setSelectedID(e.id)}name={e.name} email={e.email}
                                                      phone={e.phone} id={e.id} selected={selectedID === e.id}/>);
    return <div>
            <h2> Tasks selected {selectedID ? 1 :0}/{data.length} selected</h2>
        {persons}
    </div>;
}

function App() {
    return (
        <div className="App">
            <div class="heading">
                <h1> Task Manager </h1>
            </div>
            <div class="container">
                <h2>My Tasks</h2>
            </div>
            <div className="add-task">
                <div className="header">
                    <form>
                        <input placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;