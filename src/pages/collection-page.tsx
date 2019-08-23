import React from "react";
import RouterProps from "../types/router-props";
import PDFViewer from "../components/pdf-viewer";

// eslint-disable-next-line no-unused-vars
function CollectionPage(props: RouterProps): JSX.Element {
  return <PDFViewer src="file:///home/sanath/.config/pusthaka/books/16cbc6e92ed.a8b3128527c55c2efa1314d23e8690d12ae28a45.pdf"/>;
}

export default CollectionPage;
