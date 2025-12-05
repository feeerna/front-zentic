import { Http as axios } from "../../../utils/http/http";
import { getApiUrl } from "../../../utils/http/get-api-url";
import { loginResponse} from "../interfaces/login.type";
const URL_API = getApiUrl();

export const loginService = {
  logIn: async (data: loginResponse) => {
    return axios.post({
      url: `${URL_API}/auth/login`,
      data,
    });
  },

  // loadPermissions: async (token: string) => {
  //   return axios.get({
  //     url: `${URL_API}/permissions`,
  //     config: {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     },
  //   });
  // },
};
