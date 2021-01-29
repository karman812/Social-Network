import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {addStatusActionCreator, getUsersProfile} from './../../redux/profile-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{
    refreshProfile = () =>{
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.getUsersProfile(userId)
    }
    componentDidMount = () => {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render = () =>{
        return (
            <Profile {...this.props} profile={this.props.profile} addStatus={this.props.addStatusActionCreator}/>
        )
    }

}
const mapStateToProps = (state) =>{
    return{
        profile: state.profilePage.profile,
        isAuth: state.authPage.toggle,
        addStatus: state.profilePage.status
    }
}
export default compose(connect(mapStateToProps, {getUsersProfile,addStatusActionCreator}),withRouter,withAuthRedirect)(ProfileContainer)