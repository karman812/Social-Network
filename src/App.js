import React, {Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.nodule.css';
import Navbar from './components/Navbar/Navbar';
import {Col, Row, Container} from 'react-bootstrap';
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import Preloder from "./components/common/preloader/Preloader";

const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"))



const App = (props) => {
    return (

        <BrowserRouter>
            <Container fluid className={styles.appWrapper}>
                <HeaderContainer/>
                <Row className='main-row'>
                    <Navbar/>
                    <Col xs='7' className="content">
                        <Route path='/profile/:userId?'  render={() => {
                            return <React.Suspense fallback={<Preloder/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<Preloder/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/users'  render={() => <UsersContainer/>}/>
                        <Route path='/login'  render={() => <LoginContainer/>}/>
                        <Route path='/signin'  render={() => <SignInContainer/>}/>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

const AppContainer = (props) =>{

}
export default App;

