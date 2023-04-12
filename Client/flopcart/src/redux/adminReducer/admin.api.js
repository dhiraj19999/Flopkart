import axios from "axios";

export const getUsers = async () => {
  try {
    const users = await axios.get(
      "https://flopkart-backend-api.onrender.com/user/all-users"
    );
    return users.data;
  } catch (err) {
    alert("Can't fetch users in api");
  }
};
