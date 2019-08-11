import sha1 from "sha1";

export default class BookService {
  public generateId(author: string, title: string) {
    const idHash = sha1(`${title}${author}`);
    const createdAt: any = new Date();
    const createdAtHash: string = Math.floor(createdAt).toString(16);

    return `${createdAtHash}.${idHash}`;
  }

  // eslint-disable-next-line no-unused-vars
  public addBookInfo(id: string, author: string, title: string): void {}
}
