import './Option.css';

function Option({image,id,value}) {

    return (
        <div className="Option">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <img className='looks' src={image} alt="Look selection"/>
            <input type='radio' name={'question'+id} value={value}/>
        </div>
    );
}

export default Option;