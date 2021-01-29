import React, {useState} from "react";
import styles from "../../Users/users.module.css";

import { Col, Row} from "react-bootstrap";


let Paginator = ({currentPage, onPageChanged,totalUsersCount,pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber-1)*portionSize+1
    let rightPortionNumber = (portionNumber+1)*portionSize+1

    return (
                <Row>
                    <Col>
                        {portionNumber>1 &&
                        <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button>
                        }
                        {
                            pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(el => {
                                return <span className={currentPage == el && styles.selectedPage} onClick={(e) => {onPageChanged(el);}}>{el}</span>
                            })
                        }
                        {portionCount > portionNumber &&
                        <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>
                        }
                    </Col>
                </Row>
    )
}
export default Paginator