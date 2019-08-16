import { expect } from "chai";
import sinon from "sinon";
import BookService from "./book-service";

describe("BookService", (): void => {
  const sandbox = sinon.createSandbox();
  let service: BookService;

  beforeEach(() => {
    service = new BookService();
    sandbox.useFakeTimers(new Date(2019, 8, 15, 10, 1, 2, 2));
  });

  afterEach((): void => {
    sandbox.restore();
  });

  it("will generate unique and universal id for give details", (): void => {
    const id = service.generateId("author", "title");

    expect(id).to.equal("16d33303b72.5e992120eb81ad9144ea0493ea34cfba8447140d");
  });
});
