import Datastore from "nedb";
import { remote } from "electron";
import * as fs from "fs-extra";

const userDataPath = remote.app.getPath("userData");

if (!fs.existsSync(`${userDataPath}/data`)) fs.mkdirSync(`${userDataPath}/data`);

const db = {
  books: new Datastore(`${userDataPath}/data/books.db`),
  authors: new Datastore(`${userDataPath}/data/authors.db`),
};

db.books.loadDatabase();
db.authors.loadDatabase();

export default db;
