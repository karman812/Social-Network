import React from "react";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import nagiev from './../../assets/images/nagievjpg.jpg'
import { Col, Row} from "react-bootstrap";



let User = ({user, followed,unfollow, follow}) => {
    return (
        <Row>
            <Col xs = '9'>
                {
                        <Row className={styles.userCard}>
                            <Col className={styles.usersCards}>
                                <Row>
                                    <Col xs='3'>
                                        <NavLink to={'/profile' + '/' + user.id}>
                                            <img src={user.photos.small != null ? user.photos.small : nagiev} alt="" className={styles.userPhoto}/>
                                        </NavLink>
                                    </Col>
                                    <Col xs='9'>
                                        <Row>
                                            <Col xs='12'>{user.name}</Col>
                                            <Col xs='12'>{user.status}</Col>
                                            <Col xs='12'>{"user.location.city"}</Col>
                                            <Col xs='12'>{"user.location.country"}</Col>
                                        </Row>

                                    </Col>

                                    <Col className={styles.followButtonCol}>{followed ? <button onClick={() => {unfollow(user.id)}}>Followed</button> : <button onClick={() => {follow(user.id)}}>Unfollowed</button>}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                }
            </Col>
        </Row>
    )
}
export default User