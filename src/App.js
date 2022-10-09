import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Scenes/MainItem/Home';
import Editor from './Scenes/EditorItem/Editor';

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/editor" element={<Editor/>}/>
    </Routes>
</Router>
  
  );
}

export default App;
