import React from "react";

export default function UserDetails({ userDetail }) {
  const x = userDetail.picture;

  return (
    <div className='user-details'>
      <img src={x.large} alt="" />
      {userDetail.gender}
      <li>{userDetail.email}</li>
      <li>{userDetail.dob.age}</li>
    </div>
  );
}
