import logo from './logo.svg';
import './App.css';
import Test from './Component/Test';
import User from './Component/User';
import Greetings from './Component/Greetings';
import UserList from './Component/UserList';
import Counter from './Component/Hooks';
import Form from './Component/Form';
function Alert({message,type}){
    return(
        <div className={`alert ${type}`}>
            {message}
        </div>
    )
}

function App() {
  return (
    <>
      {/* <Alert message="This is an error message" type="error"/>
      <Alert message="This is a success message" type="success"/>    
      <Counter/> */}
      <Form/>
    </>
  );
}

export default App;
