import 'bootstrap/dist/css/bootstrap.min.css';
import { useMoralis } from 'react-moralis';
import WarningSection from './components/components/WarningSection';
import Dashboard from './components/screens/Dashboard';
import LandingPage from './components/screens/LandingPage';
import PageNav from './components/screens/PageNav';

function App() {
  const { Moralis, authenticate, isAuthenticated, logout, user, enableWeb3, Web3 } = useMoralis();
  const global = { Moralis, authenticate, isAuthenticated, logout, user, enableWeb3, Web3 };

  return (
    <>
      <PageNav global={global} />
      <WarningSection />
      {isAuthenticated? <Dashboard global={global} />:<LandingPage global={global}/>}
    </>
  )
}

export default App;
