import logo from './logo.svg';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTuk-Analog</h1>
      </header>
      <nav>
        <NavLink to="/TrendingFeed">TrendingFeed</NavLink>
        {/* <NavLink to="/User">UserProfile</NavLink> */}
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
