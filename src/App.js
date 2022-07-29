import './App.css';
import Register from './views/authentication/Register';
import { Routes, Route} from "react-router-dom";
import Login from "./views/authentication/Login";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
