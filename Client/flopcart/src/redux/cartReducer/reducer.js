import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from "./actionTypes";

const initialState = {
  cartItems: [
    {
      authorID: "63f4a6978286cb6e68509270",
      brand: "AW",
      crawl_timestamp: "2016-03-25 22:59:23 +0000",
      description:
        "Key Features of AW Bellies Sandals Wedges Heel Casuals,AW Bellies Price: Rs. 499 Material: Synthetic Lifestyle: Casual Heel Type: Wedge Warranty Type: Manufacturer Product Warranty against manufacturing defects: 30 days Care instructions: Allow your pair of shoes to air and de-odorize at regular basis; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth; do not use polish or shiner,Specifications of AW Bellies General Ideal For Women Occasion Casual Shoe Details Color Red Outer Material Patent Leather Heel Height 1 inch Number of Contents in Sales Package Pack of 1 In the Box One Pair Of Shoes",

      discounted_price: "499",
      image:
        "http://img5a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeebfwsdf6jdf6.jpeg",
      is_FK_Advantage_product: "FALSE",
      overall_rating: "No rating available",
      pid: "SHOEH4GRSUBJGZXE",
      product_category_tree:
        '["Footwear >> Women\'s Footwear >> Ballerinas >> AW Bellies"]',
      product_name: "AW Bellies",
      product_rating: "No rating available",
      product_specifications:
        '{"product_specification"=>[{"key"=>"Ideal For", "value"=>"Women"}, {"key"=>"Occasion", "value"=>"Casual"}, {"key"=>"Color", "value"=>"Red"}, {"key"=>"Outer Material", "value"=>"Patent Leather"}, {"key"=>"Heel Height", "value"=>"1 inch"}, {"key"=>"Number of Contents in Sales Package", "value"=>"Pack of 1"}, {"value"=>"One Pair Of Shoes"}]}',
      product_url:
        "http://www.flipkart.com/aw-bellies/p/itmeh4grgfbkexnt?pid=SHOEH4GRSUBJGZXE",
      quantity: 1,
      retail_price: "999",
      uniq_id: "f449ec65dcbc041b6ae5e6a32717d01b",
      __v: 0,
      _id: "63f5b3de663ffa10e48ee047",
    },
   
  ],
  
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
