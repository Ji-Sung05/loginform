import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
