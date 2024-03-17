import './App.css';
// import StudentForm from './student/StudentForm';
//import SubmittedForms from './student/SubmittedForms';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubmittedForms from './SubmittedForms';
import UserRegistrationForm from './UserRegistrationForm';

function App() {
  return (
    // <div className="App">
    //   {/* <StudentForm></StudentForm> */}
    //   <SubmittedForms/>
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={SubmittedForms} />
        <Route path="/register" component={UserRegistrationForm} />
      </Switch>
    </Router>
  );
}

export default App;
