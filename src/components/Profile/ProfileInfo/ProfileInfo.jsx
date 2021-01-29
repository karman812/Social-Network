import React from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "./ProfileInfo.module.css";
import wallper from './../../../assets/images/london.jpg'
import Preloder from "../../common/preloader/Preloader";
import defailtPhoto from "../../../assets/images/nagievjpg.jpg"

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if(!props.props){
        return <Preloder />
    }
    return (

        <Col xs='12'>
            <Row>
            <Col xs='12'>
                <img className={styles.wallper} src={wallper}></img>
            </Col>
            <Col xs='6'>
                <img  className = {styles.userAva} src={props.props.photos.large || defailtPhoto} alt=""/>
            </Col>
            <ProfileStatusWithHooks contacts={props.props.contacts} fullName={props.props.fullName} addStatus={props.addStatus} status={props.props.status}/>
            </Row>
        </Col>

)

}
export default  ProfileInfo