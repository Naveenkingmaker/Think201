import logo from './logo.svg';
import './App.css';
// import HomePage from './Components/Home';
import LandingPage from './Components/Landing page/Userlist';
import routes from './route'
function App() {
  return (
    <div className="App">
          {/* <ThemeProvider theme={theme}> */}
        {/* <GlobalStyles /> */}
        {routes()}
      {/* </ThemeProvider> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
