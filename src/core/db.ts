import Datastore from "nedb-promises";
import * as fs from "fs-extra";
import { userDataPath } from "./config";

if (!fs.existsSync(`${userDataPath}/data`)) fs.mkdirSync(`${userDataPath}/data`);
if (!fs.existsSync(`${userDataPath}/data/books.db`))
  fs.createFileSync(`${userDataPath}/data/books.db`);
if (!fs.existsSync(`${userDataPath}/data/authors.db`))
  fs.createFileSync(`${userDataPath}/data/authors.db`);

const db = {
  books: new Datastore({ filename: `${userDataPath}/data/books.db`, autoload: true }),
  authors: new Datastore({ filename: `${userDataPath}/data/authors.db`, autoload: true }),
};

export default db;
