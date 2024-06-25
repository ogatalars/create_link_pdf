# Prerequisites

Node.js: Ensure you have Node.js installed on your system.
pdf-lib: This project uses the pdf-lib library to create and manipulate PDF documents.

# Usage

Clone the Repository:

git clone https://github.com/ogatalars/create_link_pdf.git
cd create_link_pdf
Install Dependencies:
Install the required dependencies using npm:
npm install pdf-lib

# Update the URL:

Open the create_link.js file and update the url constant with the link you want to include in the PDF.

const url = "Your Link here"; // substitua pelo link desejado

# Run the Script:

Use the following command to run the script and generate the PDF file:

node create_link.js
Get the PDF:
After running the script, a PDF named link.pdf will be generated in the root directory of the project. This PDF will contain a clickable link that you specified in the script.

# Example

Update the URL in create_link.js:

Copiar código
const url = "https://example.com";
Run the Script:
node create_link.js
