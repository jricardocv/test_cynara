import './Option.css';

function Option({image,id,value}) {

    return (
        <div className="Option">
            <meta name="viewport" content="width=device-width;user-scalable=0;initial-scale=1.0"/>
            <img className='looks' src={image} alt="Look selection"/>
            <input type='radio' name={'question'+id} value={value}/>
        </div>
    );
}

export default Option;