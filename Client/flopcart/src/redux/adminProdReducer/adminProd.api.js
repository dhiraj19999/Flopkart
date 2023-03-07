import axios from "axios";

export const getProd = async () => {
  try {
    const prods = await axios.get(
      "https://drab-pants-bass.cyclic.app/products"
    );
    return prods.data;
  } catch (err) {
    alert("Can't fetch products in api");
  }
};

export const postProd = async (prod) => {
  try {
    const res = await axios.post(
      "https://drab-pants-bass.cyclic.app/products/add",
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
      "https://drab-pants-bass.cyclic.app/products/" + prodID
    );
    return res.data;
  } catch (err) {
    alert("Can't post new product in api");
  }
};

export const patchProd = async (prodID, changes) => {
  try {
    const res = await axios.patch(
      "https://drab-pants-bass.cyclic.app/products/" + prodID,
      changes
    );
    return res.data;
  } catch (err) {
    alert("Can't post new product in api");
  }
};
