import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged,totalUsersCount,pageSize,users, ...props}) => {

    console.log(props)
    return (
        <Row>
            <Col xs = '9'>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>

                {
                    users.map(el =>
                        <User user={el} key={el.id} unfollow={props.unfollow} follow={props.follow} followed={el.followed}/>
                    )
                }
            </Col>
        </Row>
    )
}
export default Users