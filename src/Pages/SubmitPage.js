import './SubmitPage.css';
import { useLocation } from "react-router-dom";
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import emailjs from '@emailjs/browser';

function SubmitPage() {

  let images = [];
  const pdfRef = useRef();

  const location = useLocation();
  const photos = location.state.photos;
  const name = location.state.name

  const downloadPDF = () =>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const radio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth * radio)/2;
      const imgY = 0;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*radio, imgHeight*radio);
      pdf.save('Lista Pessoal.pdf');

      var templateParams = {
        client_name: name,
        message: photos
      };

      emailjs.send('service_3ui51jo','template_0aq2oe3', templateParams, 'FfNYVfI5tUgghWGmy').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    });
  };


  for(let i=1; i<11;i++){
    images.push(require('./images/grupo '+i+'/'+photos[i-1]+'.png'))
  }

  const listImages = images.map(im =><img className="imagens" src={im} alt="Selected look"/>);

  return (
    <div className="SubmitPage">
      <div className="content" ref={pdfRef}>
        <h1>Sua lista personalizada, {name}</h1>
        <div className="listaImagens">
          {listImages}
        </div>
      </div>
      <button onClick={downloadPDF}>BAIXAR</button>
    </div>
  );
}

export default SubmitPage;