import "bootstrap/dist/css/bootstrap.min.css"
import HomeContainer from "./components/HomeContainer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Explore from "./components/Explore";
import Notification from "./components/Notification";
import Message from "./components/Message";
import Profile from "./components/Profile";
import More from "./components/More";
import SignIn from "./components/SignIn";
import HomePage from "./HomePage";
import NotFound from "./components/NotFound";
import HTest from "./HTest";
import firebaseConfig from './firebase'
import firebase from "firebase/compat/app";
import {Provider} from "react-redux";
import store from './reducers/store'

firebase.initializeApp(firebaseConfig);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}>
                        <Route path="/" element={<HomeContainer/>}/>
                        <Route path="/explore" element={<Explore/>}/>
                        <Route path="/notifications" element={<Notification/>}/>
                        <Route path="/messages" element={<Message/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/more" element={<More/>}/>
                    </Route>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/test" element={<HTest/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
