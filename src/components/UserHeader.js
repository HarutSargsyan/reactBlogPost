import React, { Component } from 'react';
import { fetchUsers } from '../actions/index'
import { connect } from 'react-redux'


class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchUsers(this.props.userId)
    }

    render() { 
        console.log(this.props)
        const { user } = this.props 
        if(!user) return null
        return <div className = 'header'>{user.name}</div>
    }
}

const mapStateToProps = (state,ownProps) =>{
    return {user : state.users.find(user=>user.id === ownProps.userId)}
}
 
export default connect(mapStateToProps,{ fetchUsers })(UserHeader)