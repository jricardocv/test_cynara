import './Option.css';

function Option({image,id,value}) {

    return (
        <div className="Option">
            <img className='looks' src={image} alt="Look selection"/>
            <input type='radio' name={'question'+id} value={value}/>
        </div>
    );
}

export default Option;