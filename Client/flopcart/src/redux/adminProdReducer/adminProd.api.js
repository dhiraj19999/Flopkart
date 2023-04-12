import axios from "axios";

export const getProd = async () => {
  try {
    const prods = await axios.get(
      "https://flopkart-backend-api.onrender.com/products"
    );
    return prods.data;
  } catch (err) {
    alert("Can't fetch products in api");
  }
};

export const postProd = async (prod) => {
  try {
    const res = await axios.post(
      "https://flopkart-backend-api.onrender.com/products/add",
      prod
    );
    return res.data;
  } catch (err) {
    alert("Can't post new product in api");
  }
};

export const deleteProd = async (prodID) => {
  try {
    const res = await axios.delete(
      "https://flopkart-backend-api.onrender.com/products/" + prodID
    );
    return res.data;
  } catch (err) {
    alert("Can't post new product in api");
  }
};

export const patchProd = async (prodID, changes) => {
  try {
    const res = await axios.patch(
      "https://flopkart-backend-api.onrender.com/products/" + prodID,
      changes
    );
    return res.data;
  } catch (err) {
    alert("Can't post new product in api");
  }
};
