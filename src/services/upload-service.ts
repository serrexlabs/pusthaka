import * as fs from "fs-extra";
import { getDocument } from "pdfjs-dist";
import BookService from "./book-service";
import ConfigService from "./config-service";

interface UploadedFileWithId {
  [name: string]: string;
}

interface BookInfo {
  author: string;
  title: string;
}

export default class UploadService {
  private bookService: BookService;

  private configService: ConfigService;

  public constructor(bookService: BookService, configService: ConfigService) {
    this.bookService = bookService;
    this.configService = configService;
  }

  private initDirectories(path: string) {
    if (!fs.existsSync(`${path}/books`)) fs.mkdirSync(`${path}/books`);
    if (!fs.existsSync(`${path}/thumbs`)) fs.mkdirSync(`${path}/thumbs`);
  }

  // eslint-disable-next-line no-unused-vars
  public async upload(paths: Array<string>): Promise<Array<string>> {
    const userDataUri = this.configService.getUserDataPath();
    this.initDirectories(userDataUri);

    const bookIds = await Promise.all(
      paths.map(
        async (path: string): Promise<string> => {
          const filename = this.extractTitleFromPath(path);
          const data = await fs.readFile(path);
          const book: any = await getDocument(data);
          const info: BookInfo = await this.getBookAuthorAndTitle(book, filename);
          const bookId: string = this.bookService.generateId(info.author, info.title);
          const bookPath = `${userDataUri}/books/${bookId}.pdf`;

          await this.saveThumbnails(book, bookId, userDataUri);
          await this.bookService.saveBookInfo(bookId, info.author, info.title, bookPath);
          fs.copySync(path, bookPath);

          return bookId;
        },
      ),
    );

    return bookIds;
  }

  private extractTitleFromPath(path: string) {
    const filename = path
      .replace(/^.*[\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".")
      .replace(/[^0-9a-z]/gi, " ");

    return filename.charAt(0).toUpperCase() + filename.slice(1);
  }

  /**
   * Read https://mozilla.github.io/pdf.js/examples/#interactive-examples
   */
  private async saveThumbnails(doc: any, bookId: string, path: string) {
    const canvas = document.createElement("canvas");
    const canvasContext: any = canvas.getContext("2d");

    const frontPage = await doc.getPage(1);
    const viewport = frontPage.getViewport({
      scale: 300 / frontPage.getViewport({ scale: 1 }).width,
    });

    canvas.width = 300;
    canvas.height = viewport.height;

    await frontPage.render({
      canvasContext,
      viewport,
    });

    const base64Data = canvas.toDataURL("image/jpeg", 1).replace(/^data:image\/jpeg;base64,/, "");
    fs.writeFileSync(`${path}/thumbs/${bookId}.jpeg`, base64Data, "base64");
    canvas.remove();
  }

  private async getBookAuthorAndTitle(book: any, filename: string): Promise<BookInfo> {
    const { info, metadata } = await book.getMetadata();

    // eslint-disable-next-line no-underscore-dangle
    const author = info.Author || (metadata ? metadata._metadata["dc:creator"] : "N/A");
    // eslint-disable-next-line no-underscore-dangle
    const title = info.Title || (metadata ? metadata._metadata["dc:title"] : filename);

    return { author, title };
  }
}
