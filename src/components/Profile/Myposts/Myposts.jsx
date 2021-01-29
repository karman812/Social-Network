import React from 'react';
import {Col, Row} from 'react-bootstrap';
import styles from "./Myposts.module.css"
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLenngth10 = maxLengthCreator(10)
const Myposts = React.memo(props => {

    let postsElements = props.posts.map(el => {
        return (
            <Post message={el.message} likesCount={el.likesCount}/>
        )
    })

    let onAddPost = (value) => {
        props.addPost(value.NewPostBody)
    }
    return (
        <Col xs='12'>
            <Row>
                <Col xs='12' className={styles.NewPostCol}>
                    <AddPostReduxForm onSubmit={onAddPost}/>

                </Col>
            </Row>
            {postsElements}
        </Col>
    );
})
const addPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={'Напишите свой первый пост'} name={'NewPostBody'} validate={[requiredField, maxLenngth10]}/>
            <button>Add post</button>
        </form>
    )
}
const  AddPostReduxForm = reduxForm({form: 'newPostReduxForm'})(addPostForm)
export default Myposts;