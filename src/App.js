import './App.css';
import NavbarComponent from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPages from './containers/LoginPages'
import RegisterPages from './containers/RegisterPage';
import HomePage from './containers/Home';


function App() {

  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <NavbarComponent />
        <Routes>
          {localStorage.getItem('token') ?
            <Route
              path="/login"
              element={<Navigate to="/dashboard" />}
            /> : <Route exact path='/' element={< HomePage />}></Route>
          }
          <Route exact path='/login' element={< LoginPages />}></Route>
          <Route exact path='/register' element={< RegisterPages />}></Route>
          <Route exact path='/' element={< HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
