import './styles.css'

interface IPropsCard{
    title: string;
    description: string;
    amount: string | number;
}

const Card: React.FC<IPropsCard> = ({ title, description, amount }) => {
    return (
        <div className='card-container'>
            <h1 className='card-title'> {title} </h1>
            <h2 className='card-description'> {description} </h2>
            <p className='card-amount'> {amount} </p>
        </div>
    )
}

export default Card