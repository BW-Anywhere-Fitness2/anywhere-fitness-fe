import React from 'react';

const User = props => {
  return <li>{props.user.name} {props.user.age} {props.user.height}</li>;
};

export default User; 