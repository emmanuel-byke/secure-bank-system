import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import AdminDashboard from './Components/Admin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/profile' Component={Profile} />
        <Route path='/admin' Component={AdminDashboard} />

      </Routes>
    </Router>
  )
}

export default App
