import { BrowserRouter, Route, Switch } from "react-router-dom";
//pages and components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Detail from "./pages/details/Detail";
import About from "./pages/about/About";
import Search from "./pages/search/Search";
import CreateStudent from "./pages/create/CreateStudent";
import DashboardP1 from "./pages/dashboard/DashboardP1";
import DashboardP2 from "./pages/dashboard/DashboardP2";
import DashboardP3 from "./pages/dashboard/DashboardP3";
import DashboardP4 from "./pages/dashboard/DashboardP4";
import Devpage from "./pages/devs/Devpage";
import Analytics from 'react-router-ga'
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Analytics id="G-JJCB5XWQM3">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/phase1">
                <DashboardP1 />
              </Route>
              <Route path="/phase2">
                <DashboardP2 />
              </Route>
              <Route path="/phase3">
                <DashboardP3 />
              </Route>
              <Route path="/phase4">
                <DashboardP4 />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/details/:id">
                <Detail />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/newstudent">
                <CreateStudent />
              </Route>
              <Route path="/flpopo">
                <Devpage />
              </Route>
            </Switch>
          </Analytics>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
