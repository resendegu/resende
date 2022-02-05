import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { createContext, Fragment, useContext, useEffect } from 'react';
import Home from './Home/Home';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import { blue, blueGrey, grey, cyan, pink } from '@material-ui/core/colors';
import { AuthContextProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './navbar/Navbar';
import Video from './Video/Video';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
    background: {
      default: blue[500],
      paper: 'white',
    },
  }
})

export const AuthContext = createContext({});

function App() {

  
  return (
    <Fragment>
      
        <Router>
          <AuthContextProvider>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/video">
                  <Video />
                </Route>
              </Switch>
            </ThemeProvider>
          </AuthContextProvider>
          
        </Router>
        
      
      
    </Fragment>
  );
}

export default App;
