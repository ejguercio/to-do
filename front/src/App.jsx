import { Routes, Route, BrowserRouter } from "react-router-dom";
import Form from '../src/views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import Home from "../src/views/Home/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/form/edit/:id" element={<Form />} />
          <Route path="/form" end element={<Form />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
