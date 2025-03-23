import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import AdminDashboard from './Components/Admin';
import Login from './Components/Login';
import SignupPage from './Components/Signup';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/profile' Component={Profile} />
        <Route path='/admin' Component={AdminDashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={SignupPage} />

      </Routes>
    </Router>
  )
}

export default App
