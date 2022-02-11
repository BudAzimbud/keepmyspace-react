import './App.css';
import NavbarComponent from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from './Pages/LoginPages'
import RegisterPages from './Pages/RegisterPage';
import HomePage from './Pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <NavbarComponent />
        <Routes>
          <Route exact path='/login' element={< LoginPages />}></Route>
          <Route exact path='/register' element={< RegisterPages />}></Route>
          <Route exact path='/' element={< HomePage />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
