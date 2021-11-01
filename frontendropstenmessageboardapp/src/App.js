import 'bootstrap/dist/css/bootstrap.min.css';
import { useMoralis } from 'react-moralis';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Redirect } from 'react-router';
import WarningSection from './components/components/WarningSection';
import Dashboard from './components/screens/Dashboard';
import LandingPage from './components/screens/LandingPage';
import MessageBoardScreen from './components/screens/MessageBoardsScreen';
import PageNav from './components/screens/PageNav';
import { Container } from 'postcss';
import MessageBoardDisplayScreen from './components/screens/MessageBoardDisplayScreen';

function App() {
  const { Moralis, authenticate, isAuthenticated, logout, user, enableWeb3, Web3 } = useMoralis();
  const global = { Moralis, authenticate, isAuthenticated, logout, user, enableWeb3, Web3 };

  
  // console.log(props)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <PageNav global={global} />
            <Dashboard global={global} />
          </>
        }/>
        <Route path="message-boards" element={
          <>
            <PageNav global={global} />
            <MessageBoardScreen global={global} />
          </>
        }/>
        <Route path="message-board/:id" element={
          <>
            <PageNav global={global} />
            <MessageBoardDisplayScreen global={global} />
          </>
        }/>
        <Route path="*" element={
          <Container>
            <span>Not Found 404</span>
          </Container>
        } />
      </Routes>
    </Router>
  )
}

export default App;
