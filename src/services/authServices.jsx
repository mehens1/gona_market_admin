import api from "../lib/axios";

export const authService = {
  login: async (login, password) => {
    const { data } = await api.post("/auth/login", { login, password });

    console.log("Login response data authService: ", data);

    // save token
    // localStorage.setItem(TOKEN_KEY, data.token);

    return data;
  },

  // logout: () => {
  //   localStorage.removeItem(TOKEN_KEY);
  //   window.location.href = "/login";
  // },

  // getToken: () => localStorage.getItem(TOKEN_KEY),

  // isAuthenticated: () => !!localStorage.getItem(TOKEN_KEY),
};
