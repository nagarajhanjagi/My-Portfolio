import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import MyContactForm from './components/MyContactForm';


function App() {

  const location = useLocation();
  return <>


    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
          <Route exact path="/contact" component={MyContactForm} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>



  </>

}

export default App