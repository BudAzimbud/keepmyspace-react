import './App.css';
import NavbarComponent from './components/Navbar';

import RouteHome from './routes/RouteHome';

function App() {

  // localStorage.removeItem('token')

  return (
    <div className="App">
      <NavbarComponent />
      < RouteHome />
    </div>
  );
}

export default App;
