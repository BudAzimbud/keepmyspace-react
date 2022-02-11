import './App.css';
import RouteAuth from './routes/RouteAuth';

import RouteHome from './routes/RouteHome';

function App() {

  // localStorage.removeItem('token')

  return (
    <div className="App">
      {localStorage.getItem('token') ?
        < RouteAuth />
        :
        < RouteHome />
      }
    </div>
  );
}

export default App;
