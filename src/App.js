import './App.css';
import NavbarDashBoardComponent from './components/NavbarDashBoard';


import RouteHome from './routes/RouteHome';

function App() {


  return (
    <div className="App">
      {localStorage.getItem('token') ? <NavbarDashBoardComponent /> : null }
      < RouteHome />
    </div>
  );
}

export default App;
