import axios from "axios";

export const getUsers = async () => {
  try {
    const users = await axios.get(
      "https://drab-pants-bass.cyclic.app/user/all-users"
    );
    return users.data;
  } catch (err) {
    alert("Can't fetch users in api");
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(
      "https://drab-pants-bass.cyclic.app/user/delete/" + id
    );
    return res.data;
  } catch (err) {
    alert("Can't fetch users in api");
  }
};
