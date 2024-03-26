import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic } from 'azle';
import express from 'express';

/**
 * `messagesStorage` - it's a key-value datastructure that is used to store messages.
 * {@link StableBTreeMap} is a self-balancing tree that acts as a durable data storage that keeps data across canister upgrades.
 * For the sake of this contract we've chosen {@link StableBTreeMap} as a storage for the next reasons:
 * - `insert`, `get` and `remove` operations have a constant time complexity - O(1)
 * - data stored in the map survives canister upgrades unlike using HashMap where data is stored in the heap and it's lost after the canister is upgraded
 *
 * Brakedown of the `StableBTreeMap(string, Message)` datastructure:
 * - the key of map is a `messageId`
 * - the value in this map is a message itself `Message` that is related to a given key (`messageId`)
 *
 * Constructor values:
 * 1) 0 - memory id where to initialize a map.
 */

/**
 This type represents a message that can be listed on a board.
 */
class Message {
   id: string;
   title: string;
   body: string;
   attachmentURL: string;
   createdAt: Date;
   updatedAt: Date | null
}

const messagesStorage = StableBTreeMap<string, Message>(0);

export default Server(() => {
   const app = express();
   app.use(express.json());

   app.post("/messages", (req, res) => {
      const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};
      messagesStorage.insert(message.id, message);
      res.json(message);
   });

   app.get("/messages", (req, res) => {
      res.json(messagesStorage.values());
   });

   app.get("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const messageOpt = messagesStorage.get(messageId);
      if ("None" in messageOpt) {
         res.status(404).send(`the message with id=${messageId} not found`);
      } else {
         res.json(messageOpt.Some);
      }
   });

   app.put("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const messageOpt = messagesStorage.get(messageId);
      if ("None" in messageOpt) {
         res.status(400).send(`couldn't update a message with id=${messageId}. message not found`);
      } else {
         const message = messageOpt.Some;
         const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};
         messagesStorage.insert(message.id, updatedMessage);
         res.json(updatedMessage);
      }
   });

   app.delete("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const deletedMessage = messagesStorage.remove(messageId);
      if ("None" in deletedMessage) {
         res.status(400).send(`couldn't delete a message with id=${messageId}. message not found`);
      } else {
         res.json(deletedMessage.Some);
      }
   });

   return app.listen();
});

function getCurrentDate() {
   const timestamp = new Number(ic.time());
   return new Date(timestamp.valueOf() / 1000_000);
}