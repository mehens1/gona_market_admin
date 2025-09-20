import api from "../lib/axios";

export const usersService = {
  updateUserStatus: async (user_id, status) => {
    const { data } = await api.patch("/update-user-status", {
      user_id,
      is_active: status,
    });
    return data;
  },
};
