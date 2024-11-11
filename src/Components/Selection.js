import './Selection.css';
import Option from './Option';

function Selection({grupo,image,num_buttons,id,handleChange}) {
    let bs = [];

    if(num_buttons === 4){
        bs = [1,2,3,4]
    }
    else{
        bs = [1,2,3,4,5]
    }
    // const listButtons = bs.map(b =><input type='radio' value={b} name={'question'+id}/>);
    const listImages = bs.map((b,index) =><Option id={id} image={image[index]} value={b}/>);


    return (
        <div className="Selection">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <p className='cartela'>CARTELA {grupo+1}</p>
            <div className="options" onChange={event => handleChange(event, id)}>
                {listImages}
            </div>
        </div>
    );
}

export default Selection;