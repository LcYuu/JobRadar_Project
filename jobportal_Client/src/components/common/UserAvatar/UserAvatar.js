import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/common/logo.jpg';
import { store } from '../../../redux/store';
const UserAvatar = () => {
  const user = useSelector(store => store.auth.jwt);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate('/account-management');
  };

  return (
    <div onClick={handleAvatarClick} className="flex items-center cursor-pointer">
      <img 
        src={logo}
        alt="User Avatar" 
        className="w-8 h-8 rounded-full mr-2"
      />
      <span className="text-white">UserName</span>
    </div>
  );
};

export default UserAvatar;