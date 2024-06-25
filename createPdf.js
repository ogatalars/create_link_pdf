const { PDFDocument, rgb } = require("pdf-lib");
const fs = require("fs");

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();

  const fontSize = 30;
  const text = "Click here to visit the link";
  const url = "Your Link here"; // substitua pelo link desejado

  page.drawText(text, {
    x: 50,
    y: height / 2 + fontSize / 2,
    size: fontSize,
    color: rgb(0, 0, 1),
  });

  page.drawText(url, {
    x: 50,
    y: height / 2 - fontSize,
    size: fontSize,
    color: rgb(0, 0, 1),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("link.pdf", pdfBytes);
  console.log("PDF created!");
}

createPdf();
