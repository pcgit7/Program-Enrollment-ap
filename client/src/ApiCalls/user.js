import axiosInstance from ".";

const baseUrl = 'http://localhost:5000';

export const RegisterUser = async (data) => {
    try 
    {
        const response = await axiosInstance.post(`${baseUrl}/api/user/register`,data);
        return response.data;    
    } catch (error) {
        throw error;
    }
};

export const LoginUser = async (data) => {
    try {
        
        const response = await axiosInstance.post(`${baseUrl}/api/user/login`,data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const GetUserDetails = async () => {
    try 
    {
        const response = await axiosInstance.get(`${baseUrl}/api/user/get-all-user-programs`);
        return response.data;    
    } catch (error) {
        throw error;
    }
};

export const CreateProgram = async (data) => {
    try 
    {
        console.log(data);
        const response = await axiosInstance.post(`${baseUrl}/api/user/add-new-program`,data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const UpdateProgram = async (data) => {
    try 
    {
        const response = await axiosInstance.post(`${baseUrl}/api/user/update-program`,data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const DeleteProgram = async (programId) => {
    try 
    {
        const response = await axiosInstance.post(`${baseUrl}/api/user/delete-program`,{programId});
        return response.data;
    } catch (error) {
        throw error;
    }
};