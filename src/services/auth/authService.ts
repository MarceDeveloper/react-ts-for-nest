// import apiClient from '../axiosConfig';
// import { Login_Response,login_Data ,getUserData_Response} from './types';

// const authService = {
//   login: async (data: login_Data): Promise<Login_Response> => {
//     const response = await apiClient.post<Login_Response>('/auth/login', data);
//     return response.data;
//   },
//   getUserData: async (token: string): Promise<getUserData_Response> => {
//     const response = await apiClient.get<getUserData_Response>('/auth/me', {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   },
// };

// export default authService;




import apiClient from '../axiosConfig';
import { Login_Response,login_Data ,getUserData_Response} from './types';

const authService = {
  login: async (data: login_Data): Promise<Login_Response> => {
    const response = await apiClient.post<Login_Response>('/auth/login', data);
    return response.data;
  },
  getUserData: async (token: string): Promise<getUserData_Response> => {
    const response = await apiClient.get<getUserData_Response>('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};

export default authService;