import './Option.css';

function Option({image,id,value}) {

    return (
        <div className="Option">
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <img className='looks' src={image}/>
            <input type='radio' name={'question'+id} value={value}/>
        </div>
    );
}

export default Option;