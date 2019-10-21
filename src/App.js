import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import PropTypes from 'react';
import Sidebar from "./components/Navbar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div>
                    <Navbar />
                    <div className='friends'>
                        <Sidebar friends={props.store}/>
                    </div>
                </div>

                <div className = 'app-wrapper-content'>
                    <Route path='/dialogs' render ={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render ={() => <ProfileContainer/>}/>
                    <Route path='/news' render ={() => <News/>}/>
                    <Route path='/music' render ={ ()=> <Music/>}/>
                    <Route path='/settings' render ={() => <Settings/>}/>
                    <div className='app-wrapper-content-users'>
                    <Route path = '/users' render ={()=> <UsersContainer/>}/>
                        <Route path = '/login' render ={()=> <Login/>}/>
                </div>
                </div>
            </div>
        </BrowserRouter>)
}

App.propTypes ={
    dialogsPage: PropTypes.string,
    profilePage: PropTypes.string,
}

export default App;
