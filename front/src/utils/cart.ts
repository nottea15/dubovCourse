import {API} from './api';

interface SignInData {
  email: string;
  password: string;
  username?:string;
}

const getCart = async () => {
  const response = await API.get('/cart');
  console.log(response, 'res');
  return response.data;
};

const addToCart = async (barcode: number) => {
  const response = await API.post('/cart', {barcode});
  return response.data;
};

const removeFromCart = async (itemID: string) => {
    const response = await API.delete(`/cart/${itemID}`);
    console.log(response, 'res');
    return response.data;
  };

const reduceQuantity = async (itemID: string) => {
    const response = await API.put(`/cart/reduceQty/${itemID}`)
    return response.data
}

export default {getCart, addToCart, removeFromCart, reduceQuantity};
