import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetUser, SetAllProgram } from "../Redux/userSlice";
import { ShowLoader, HideLoader } from "../Redux/loaderSlice";
import { GetUserDetails } from "../ApiCalls/user";

const ProtectedRoutes = (props) => {
  const { user } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      dispatch(ShowLoader());
      const response = await GetUserDetails();

      dispatch(HideLoader());
      if (response.success) {
        dispatch(SetUser(response.data.user));
        dispatch(SetAllProgram(response.data.allPrograms));
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      localStorage.clear();
      dispatch(HideLoader());
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!user) getUser();
  }, [user]);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="h-screen w-screen bg-gray-100 p-2">
      {/* header */}
      <div className="flex justify-between p-5 bg-primary rounded">
        <div className="flex items-center gap-1">
          <i className="ri-message-3-line text-2xl text-white"></i>
          <h1
            className="text-white text-2xl uppercase font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            ENROLL
          </h1>
        </div>
        <div className="flex gap-2 text-md items-center bg-white p-2 rounded">
          <i class="ri-shield-user-line text-primary"></i>

          <h1
            className="underline text-primary cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          >
            {user?.name}
          </h1>

          <i
            class="ri-logout-circle-r-line ml-5 text-xl cursor-pointer text-primary"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          ></i>
        </div>
      </div>

      {/* content (pages) */}
      <div className="py-5">{props.children}</div>
    </div>
  );
};

export default ProtectedRoutes;
