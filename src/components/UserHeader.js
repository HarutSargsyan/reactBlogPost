import React, { useEffect } from "react";
import { fetchUsers } from "../actions/index";
import { connect } from "react-redux";

const UserHeader = ({ fetchUsers, user, userId }) => {
  useEffect(() => {
    fetchUsers(userId);
  });

  if (!user) return null;
  return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUsers })(UserHeader);
