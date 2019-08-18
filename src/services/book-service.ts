import sha1 from "sha1";
import db from "../core/db";

export default class BookService {
  public generateId(author: string, title: string) {
    const idHash = sha1(`${title}${author}`);
    const createdAt: any = new Date();
    const createdAtHash: string = Math.floor(createdAt).toString(16);

    return `${createdAtHash}.${idHash}`;
  }

  public async saveBookInfo(
    bookId: string,
    author: string,
    title: string,
    path: string,
  ): Promise<any> {
    const authorId = this.findAuthorId(author);
    await db.books.insert({ bookId, authorId, authorName: author, title, path });
  }

  private async findAuthorId(name: string): Promise<string> {
    let [author] = await db.authors.find({ name });

    if (author) {
      // eslint-disable-next-line no-underscore-dangle
      return author._id;
    }

    author = await db.authors.insert({ name });
    // eslint-disable-next-line no-underscore-dangle
    return author._id;
  }
}
