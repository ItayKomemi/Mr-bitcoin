import { Route, HashRouter as Router, Switch } from "react-router-dom"
import "./styles/App.scss"
import { HomePage } from "./views/HomePage"
import { ContactPage } from "./views/ContactPage"
import { AppHeader } from "./cmps/AppHeader"
import { ContactDetails } from "./views/ContactDetails"
import { StatisticPage } from "./views/StatisticPage"
import { ContactEdit } from "./views/ContactEdit"
import { SignupPage } from "./views/SignupPage"

function App() {
  return (
    <Router>
      <section className="main-layout">
        <AppHeader />

        <main className="main-container">
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/charts" component={StatisticPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>

        <footer className="main-footer full">
          <section className="container">
            <h3 className="logo">Mister BITcoin 2023</h3>
            <span>coffie rights &copy;</span>
          </section>
        </footer>
      </section>
    </Router>
  )
}

export default App
