import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navigation from './models/Navigation';
import Routers from './models/Routers';
import Footer from './models/Footer';
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The main app
 * 
 * The documentation
 * 1. First of all, install a react app (npm-> create react app), and Create a folder for the project
 * 2. install a router module for react to routes handle
 * 3. install redux framework, and module react-redux (coding through stores)
 * 4. install axios module to interact with the backend (APIs)
 * 5. Handling store
 *  5.1. Building footer (modules/Footer.js), header (modules/Navigation.js)
 *  5.2. Building a store to store all the reducer (including: student reducer and search reducer)
 *  5.3. Get all students and store them into the student reducer
 * 6. Building components in folder "models": 
 *  6.1. Student.js (Student class represents a student in the list of students from the APIs)
 *  6.2. Students.js (Students class represents a list of students from the APIs)
 *  6.3. Part01.js, Part02.js, Part03.js, Part04.js, Part05.js repesent for each part in this assignment
 * 7. And finally, connect and interaction components with each others
 *    (details in components above)
 */
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <Router>
            <Navigation/>
            <Routers/>
          </Router>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
