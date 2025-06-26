import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import AppRoutes from './routes/routes'

function App() {

  return (
    <>
      <Router>
          <Navigation />
          <AppRoutes />
      </Router>
    </>
  );
}

export default App
