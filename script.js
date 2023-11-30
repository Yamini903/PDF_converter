function convertToText() {
    const pdfInput = document.getElementById('pdfInput');
    
    if (pdfInput.files.length === 0) {
      alert('Please select a PDF file.');
      return;
    }
  
    const pdfFile = pdfInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const pdfData = new Uint8Array(e.target.result);
  
      // Convert PDF to text using pdfmake
      pdfMake.vfs = pdfData;
      pdfMake.createPdf({}).getText((text) => {
        alert('PDF to Text Conversion:\n\n' + text);
      });
    };
  
    reader.readAsArrayBuffer(pdfFile);
  }
