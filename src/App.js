import { useEffect } from 'react';
import './App.css';
import NavbarHomeComponent from './components/NavbarHomeComponent';
import NavbarDashBoard from './components/NavbarDashBoardComponent';


import RouteHome from './routes/Route';

function App() {

  useEffect(() => {
    console.log(process.env)
  }, [])

  return (
    <div className="App">
      < RouteHome />
    </div>
  );
}

export default App;
