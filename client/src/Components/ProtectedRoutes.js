import React from "react";
import {  Navigate , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { SetUser, UpdateAllProgram } from "../redux/userSlice";
import { showLoading,hideLoading } from "../redux/alertsSlice";
import { GetUserDetails } from "../ApiCalls/user";

const ProtectedRoutes = (props) => {
    
  const { user } = useSelector((state) => state.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      
       dispatch(showLoading()); 
       const response = await GetUserDetails();
       
      dispatch(hideLoading());
      if (response.success) 
      {
        dispatch(SetUser(response.data.user));
        dispatch(UpdateAllProgram(response.data.allPrograms));
      }
       else
       {
        localStorage.clear();
        navigate("/login");
       } 
       
    } 
    
    catch (error) 
    {
      localStorage.clear();  
      dispatch(hideLoading());
      navigate("/login");
    }
  };

  useEffect(() => {
    if(!user)
    getUser();
  }, [user]);

  if (localStorage.getItem("token")) 
  return props.children;

  else {
    return <Navigate to="/login"/>
  }
};

export default ProtectedRoutes;