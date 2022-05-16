
import './App.css';
import Profile from "./components/Profile/Profile"
function App({handleName,image}) {
  return (
    <div className="App">
     <Profile fullName="Jhon doe" bio="bio" profession="Devlopper"  image={image} handleName = {handleName } />
    </div>
  );
}

export default App;
