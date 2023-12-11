import { getUserBySessionToken } from "../db/users";
import { Cart } from "../db/cart";
import { Item } from "../db/item";
import express from "express";
import mongoose from "mongoose";
import { isAuthenticated } from "../middlewares";

// Get the user's cart
export default (router: express.Router) => {
  router.get("/cart", isAuthenticated, async (req, res) => {
    try {
      const authorization = req.headers.authorization;
      const sessionToken = authorization.slice(7);

      if (!sessionToken) {
        return res.sendStatus(403);
      }

      const existingUser = await getUserBySessionToken(sessionToken);
      const cart = await Cart.findOne({ user: existingUser._id });

      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Add an item to the cart
  router.post("/cart", isAuthenticated, async (req, res) => {
    try {
      const item = await Item.findOne({ barcode: req.body.barcode });
      if (!item) {
        return res.status(404).json({ message: "Item Not Found" });
      }

      const authorization = req.headers.authorization;
      const sessionToken = authorization.slice(7);

      if (!sessionToken) {
        return res.sendStatus(403);
      }

      const existingUser = await getUserBySessionToken(sessionToken);
      const cart = await Cart.findOne({ user: existingUser._id });
      const existingItem = cart.items.find(
        (obj) => obj.barcode === item.barcode
      );
      let existingItemIndex = cart.items.findIndex(
        (cartItem) => cartItem.barcode === item.barcode
      );
      console.log(existingItemIndex);
      if (existingItemIndex > -1) {
        // Item is in cart, so increase the quantity
        cart.items[existingItemIndex].qty
          ? (cart.items[existingItemIndex].qty += 1)
          : (cart.items[existingItemIndex].qty = 2);
      } else {
        // Item is not in cart, so add it
        cart.items.push(item);
      }

      const updatedCart = await cart.save();
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Remove an item from the cart
  router.delete("/cart/:itemId", isAuthenticated, async (req, res) => {
    try {
      const authorization = req.headers.authorization;
      const sessionToken = authorization.slice(7);

      if (!sessionToken) {
        return res.sendStatus(403);
      }

      const existingUser = await getUserBySessionToken(sessionToken);
      const cart = await Cart.findOne({ user: existingUser._id });

      const itemId = new mongoose.Types.ObjectId(req.params.itemId);
      const updatedCart = await Cart.findOneAndUpdate(
        { user: existingUser._id },
        { $pull: { items: { _id: itemId } } },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.put("/cart/reduceQty/:itemId", isAuthenticated, async (req, res) => {
    try {
      const authorization = req.headers.authorization;
      const sessionToken = authorization.slice(7);
  
      if (!sessionToken) {
        return res.sendStatus(403);
      }
  
      const existingUser = await getUserBySessionToken(sessionToken);
      const itemId = new mongoose.Types.ObjectId(req.params.itemId);
  
      // Find the cart that belongs to this user
      let cart = await Cart.findOne({ user: existingUser._id });
  
      if (!cart) {
        return res.status(400).json({ message: "Cart not found" });
      }
  
      // Find the item that needs to be updated
      let item = cart.items.id(itemId);
  
      if (!item) {
        return res.status(400).json({ message: "Item not found" });
      }
  
      // Decrement the item quantity. If it's 1, remove the item.
      if (item.qty && item.qty > 1) {
        item.qty -= 1;
      }
  
      // Save the updated cart
      const updatedCart = await cart.save();
  
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
};
