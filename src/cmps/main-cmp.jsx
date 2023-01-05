import { Card } from './card.jsx'
import { cards } from '../services/card-service.js';

export const CardList = () => {

    // const cards = cards;
    console.log(cards);
    return (
        <div className="card-list">

            {cards.map(card => {
                return <Card key={card.id} card={card} />
            })
            }
        </div>
    );
}