import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import News from "./components/News/News";


const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div>
                    <Navbar/>
                    <div className='friends'>
                        {/*<Sidebar friends={props.store}/>*/}
                    </div>
                </div>
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={() => <Redirect to = {"/profile"}/>}/>

                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<div>Looding...</div>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>

                    <Route path='/profile/:userId?'
                           render={() => {
                               return <React.Suspense fallback={<div>Looding...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }
                           }/>

                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>
                    <div className='app-wrapper-content-users'>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocialApp;
