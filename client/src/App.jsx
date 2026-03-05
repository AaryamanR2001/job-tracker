import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <div>
      <nav style={{ padding: 20 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/apply">Apply</Link> |{" "}
        <Link to="/tracker">Tracker</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
