import React, {useEffect, useRef} from "react";
import { getDocument } from "pdfjs-dist";

interface Props {
    src: string
}

function PDFViewer(props: Props) {

   const canvasRef = useRef(null);

   useEffect(() => {

       async function renderPage(canvas: any, canvasContext: any) {
           const doc: any = await getDocument(props.src);
           const page = await doc.getPage(1);
           const scale = canvas.width / page.getViewport(1).width;

           const viewport = page.getViewport({ scale });
           canvas.height = viewport.height;

           await page.render({
               canvasContext,
               viewport,
           });
       }

       const canvas = canvasRef.current;
       // @ts-ignore
       const canvasContext = canvas.getContext('2d');

       renderPage(canvas, canvasContext);

   });

   /* const canvas = document.getElementById("#pdf-canvas");
    const canvasContext: any = canvas.getContext("2d") ;

    const doc = getDocument(props.src);
    const frontPage = await doc.getPage(1);

    const viewport = frontPage.getViewport({
        scale: 300 / frontPage.getViewport({ scale: 1 }).width,
    });

    canvas.width = 300;
    canvas.height = viewport.height;

    await frontPage.render({
        canvasContext,
        viewport,
    });*/


    return <div id="pdf-main-container">
            <div id="pdf-loader">Loading document ...</div>
            <div id="pdf-contents">
                <div id="pdf-meta">
                    <div id="pdf-buttons">
                        <button id="pdf-prev">Previous</button>
                        <button id="pdf-next">Next</button>
                    </div>
                    <div id="page-count-container">Page <div id="pdf-current-page"></div> of <div id="pdf-total-pages"></div></div>
                </div>
                <canvas width="400" ref={ canvasRef } />
                <div id="page-loader">Loading page ...</div>
            </div>
    </div>
}

export default PDFViewer;
