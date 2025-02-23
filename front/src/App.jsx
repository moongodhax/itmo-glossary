import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div id="container">
      <header>
        <h1><Link to="/">Глоссарий</Link></h1>
        <button>
          <Link to="/graph">Граф</Link>
        </button>
        <div className="card small copyright">
          <span className="header">Игорь Агарков (c) 2025</span>
        </div>
      </header>

      <Outlet />

    </div>
  )
}

export default App
