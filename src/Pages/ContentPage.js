import './ContentPage.css';
import Selection from '../Components/Selection';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import logo from './images/logo.png';
import insta from './images/instagram.png';

function ContentPage() {

  let grupo1 = [];
  let grupo2 = [];
  let grupo3 = [];
  let grupo4 = [];
  let grupo5 = [];
  let grupo6 = [];
  let grupo7 = [];
  let grupo8 = [];
  let grupo9 = [];
  let grupo10 = [];

  let grupos = [grupo1,grupo2,grupo3,grupo4,grupo5,grupo6,grupo7,grupo8,grupo9,grupo10]

  let images = [];

  const bs = [4,4,4,5,5,5,5,5,5,4];
  const [photos,setPhotos] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [name,setName] = useState();
  let cond = 5;

  let navigate = useNavigate();

  for(let i=1; i<11;i++){
    images.push([i,require('../Components/images/comp'+i+'.jpg'),bs[i-1]])
  }

  for(let g = 1; g < grupos.length + 1; g++){
    if(g===1 || g===2 || g===3 || g===10){
      cond = 5;
    }else{
      cond = 6
    }
    for(let i=1; i<cond;i++){
      grupos[g-1].push(require('./images/grupo '+g+'/'+i+'.png'))
    }
  }


  function handleClick(e) {
    e.preventDefault();
    if(photos.includes(0)){
      alert('Por favor selecione uma foto de cada cartela ' + photos);
    }else{
      //alert(photos + " " + name);
      navigate('/Pages/SubmitPage', {state: {photos:photos, name:name}});
    }
  }
  function handleChange(event, id) {
    photos[id] = event.target.value;
  };

  function handleName(e){
    setName(e.target.value);
  }



  const selectionList = grupos.map( (s,index) => <Selection key={index} id={index} grupo={index} image={grupos[index]} num_buttons={bs[index]} handleChange={handleChange}></Selection>);

  return (
    <div className="Content">
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <div  className='masterheader'>
        <div className='header'>
          <img className='logo' src={logo} alt="Logo"/>
          <p className='subtitle'>DESCUBRA SEU</p>
          <p className="title-estilo">Estilo</p>
          <p className='title-pessoal'>Pessoal</p>
        </div>
        <div className='subheader'>
          <p className='nome'>Cynara Vianna</p>
          <p className='desc'>Escolha uma imagem em cada cartela abaixo</p>
          </div>
      </div>
      <div className="Content-body">
          {selectionList}
          <div className='User'>
            <p>Nome Completo:</p>
            <div className='input-style'>
              <input key="n" type="text" name='nome' onChange={handleName}/>
              <span></span>
            </div>
          </div>
          <button type="submit" onClick={handleClick}>CONCLUIR</button>
          <div className='links'>
            <img className="insta" src={insta} alt="instagram-logo"/>
            <a className='link-cantinhodena' href="https://www.instagram.com/cantinhodena/">@cantinhodena</a>
          </div>
      </div>
    </div>
  );
}

export default ContentPage;