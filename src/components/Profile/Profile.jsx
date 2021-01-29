import React from 'react';
import {Col, Row} from 'react-bootstrap';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";


const Profile = (props) => {

    return (
        <Row>
            <ProfileInfo props={props.profile} addStatus={props.addStatus}/>
            <MypostsContainer />
        </Row>
    )
}
export default Profile;


