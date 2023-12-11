import express from "express";
import { isAuthenticated } from "../middlewares";
import { Item } from "../db/item";

//fetch all items
export default (router: express.Router) => {
  router.get(
    "/items",
    isAuthenticated,
    async (req: express.Request, res: express.Response) => {
      try {
        const items = await Item.find({});
        res.status(200).send(items);
      } catch (error) {
        res.status(400).send(error);
      }
    }
  );

  //fetch an item
  router.get("/items/:id", isAuthenticated, async (req, res) => {
    try {
      const item = await Item.findOne({ barcode: req.params.id });
      if (!item) {
        res.status(404).send({ error: "Item not found" });
      }
      res.status(200).send(item);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //create an item
  router.post("/items", isAuthenticated, async (req, res) => {
    try {
      const newItem = new Item({
        ...req.body,
      });
      await newItem.save();
      res.status(201).send(newItem);
    } catch (error) {
      console.log({ error });
      res.status(400).send({ message: "error" });
    }
  });
};
