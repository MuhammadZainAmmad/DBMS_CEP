import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Admin from '../containers/Admin';
import Home from '../containers/Home';
import SignInUp from '../containers/SignInUp';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path= '/' component = {Home}></Route>
                <Route exact path= '/signinup' component = {SignInUp}></Route>
                <Route exact path="/signin" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/user/:id" component={Home} />
            </Switch>
        </Router>
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component={Login} />
        //         <Route exact path="/signup" component={Signup} />
        //         <Route exact path="/user/:id" component={Home} />
        //     </Switch>
        // </Router>
    )
}

export default AppRouter;