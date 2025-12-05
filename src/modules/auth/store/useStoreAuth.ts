import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { loginService } from "../services/Auth.services";
import jwtDecode from "jwt-decode";
import { loginType } from "../interfaces/login.type";
export interface Item {
  token: String;
  isLogged: boolean;
  typeUser: String;
}

export const useAuthStore: any = defineStore({
  id: "auth",
  state: () => ({
    user: useStorage("auth", {
      token: "",
      isLogged: false,
      typeUser: "",
      exp: "",
    }),
    permissions: useStorage("permissions", {
      moduleAccesses: [],
      actions: [],
    }),
  }),

  actions: {
    logout() {
      this.user = {
        token: "",
        isLogged: false,
        typeUser: "",
        exp: "",
      };
      window.location.assign("/login");
    },

    async login(data: loginType) {
        const response = await loginService.logIn({
          username: data.user,
          password: data.password,
        });
        if (response.status == 200) {
          let decoded: any = jwtDecode(response.data.response.token);
          this.user = {
            token: response.data.response.token,
            isLogged: true,
            typeUser: decoded.tokenObject.username,
            exp: decoded.tokenObject.exp,
          }
          return { 
            isLogged: true
          };
        } else {
          return {
            isLogged: false,
            message: response.data.response.message
          };
        }
    },

    authCheck() {
      if (this.user.token.length > 1) {
        var current_time = new Date().getTime() / 1000;
        if (current_time > parseInt(this.user.exp)) {
          this.user = {
            token: "",
            isLogged: false,
            typeUser: "",
            exp: "",
          };
          window.location.assign("/login");
        } else {
          window.location.assign("/");
        }
      } else {
        this.user = {
          token: "",
          isLogged: false,
          typeUser: "",
          exp: "",
        };
      }
    },
    // async loadPermissions() {
    //   const response = await loginService.loadPermissions(this.user.token);
    //   this.permissions.actions = response.data.response.permissions;
    //   this.permissions.moduleAccesses = response.data.response.moduleAccesses;
    // },
  },
});
