import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './Post.module.css';
import  avatar from './../../../../assets/images/avatar.png'


const Post = (props) =>{
    return(
        <Row>
            <Col xs='auto' className={styles.item}>
                <Row>
                    <Col xs='12'>
                        <img src={avatar} alt=""/>
                        {props.message}
                    </Col>
                    <Col xs='12' className={styles.like_col}>
                        <span>Like {props.likesCount}</span>
                    </Col>
                </Row>



            </Col>
        </Row>
    );
}
export default Post;