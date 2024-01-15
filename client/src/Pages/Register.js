import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../ApiCalls/user';
import { HideLoader, ShowLoader } from '../Redux/loaderSlice';
import toast from 'react-hot-toast';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [nameError , setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  const validateAllDetails = () => {
    if(!user.name){
      setNameError("Enter Name");
      return false
    }

    else if (!validateEmail(user.email)) {
      if(!user.email){
        setEmailError("Enter email address");
      }
      else{
        setEmailError('Invalid email address');
      }
      
      dispatch(HideLoader());
      return false;
    }

    else if (!validatePassword(user.password)) {
      if(!user.password){
        setPasswordError("Enter Password");
      }
      else{
        setPasswordError('Password must be at least 4 characters long');
      }
      
      dispatch(HideLoader());
      return false;
    }

    return true;
  };

  const register = async () => {
    try {
      dispatch(ShowLoader());      
      if(!validateAllDetails()){
        return ;
      }
      const response = await RegisterUser(user);
      dispatch(HideLoader());

      if (response.success) {
        toast.success(response.message);
        navigate('/login');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoader());
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="bg-white shadow-md p-5 flex flex-col gap-5 w-96">
        <div className="flex gap-2">
          <i className="ri-message-3-line text-2xl text-primary"></i>
          <h1 className="text-2xl uppercase font-semibold text-primary">Register</h1>
        </div>
        
        <hr />
        <input
          type="text"
          value={user.name}
          required
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
            setNameError('');
          }}
          placeholder="Enter your name"
        />
        {nameError && <p className="text-red-500">{nameError}</p>}
        <input
          type="text"
          required
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
            setEmailError('');
          }}
          placeholder="Enter your email"
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <input
          type="password"
          required
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
            setPasswordError('');
          }}
          placeholder="Enter your password"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <button
          className={
            user.name && user.email && user.password ? 'contained-btn' : 'disabled-btn'
          }
          onClick={register}
        >
          Register
        </button>
        <Link to="/login" className="underline">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
