// import logo from './logo.svg';
import './App.css';
//
// function App() {
//   return (

//     </div>
//   );
// }
//
// export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Lesson from "./Components/Lesson";
import TeacherDashboard from "./Components/TeacherDashboard";
import StudentDashboard from "./Components/StudentDashboard";
import Home from "./Components/Home";

export default function App() {
    return (
        <Router>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                        <Route path="/teacher-dashboard">
                            <TeacherDashboard/>
                        </Route>
                        <Route path="/student-dashboard">
                            <StudentDashboard/>
                        </Route>
                        <Route path="/lesson">
                            <Lesson/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
        </Router>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
