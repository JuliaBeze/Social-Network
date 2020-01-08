import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer"
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";


const ProfileContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'));
const DialogsContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));

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
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<div>Загрузка...</div>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/profile/:userId?'
                           render={() => {
                               return <React.Suspense fallback={<div>Загрузка...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }
                           }/>
                    <Route path='/music' render={() => <Music/>}/>
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
