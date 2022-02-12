import './Card.css'

const Card = () => {

    let greeting;
    const time = new Date().getHours();

    if(time<12){
         greeting = "Good Morning!";
    }
    else if(time<16){
        greeting = "Good Afternoon!";
    }
    else if(time>16 && time<21){
        greeting = "Good Evening!";
    }
    else{
        greeting = "Good Night!";
    }

    return(
        <div className='card-wrapper'>
            <span>{greeting}</span>
        </div>
    )

}

export default Card;
