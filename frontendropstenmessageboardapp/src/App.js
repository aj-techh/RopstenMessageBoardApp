import 'bootstrap/dist/css/bootstrap.min.css';
import { useMoralis } from 'react-moralis';
import WarningSection from './components/components/WarningSection';
import Dashboard from './components/screens/Dashboard';
import LandingPage from './components/screens/LandingPage';
import PageNav from './components/screens/PageNav';

function App() {
  const { Moralis, authenticate, isAuthenticated, logout, user, enableWeb3, Web3 } = useMoralis();
  const global = { Moralis, authenticate, isAuthenticated, logout, user, enableWeb3, Web3 };
  if(isAuthenticated){
    //if user is logged in
    return(
      <>
        <PageNav global={global} />
        <WarningSection />
        <Dashboard global={global} />
      </>
    )
  }else{
    //if no user is logged in
    return (
      <>
        <PageNav global={global} />
        <WarningSection />
        <LandingPage global={global}/>
      </>
    );
  }
}

export default App;
