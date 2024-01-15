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
        const response = await axiosInstance.get('/api/user/get-all-programs');
        return response.data;    
    } catch (error) {
        throw error;
    }
};