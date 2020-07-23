import React from 'react'
import Card from './Card'

class CardList extends React.Component
{
    
    render()
    {
        const {robots} = this.props;
        // const cardArray = robots.map((user, idx)=>{
        //     return (<Card 
        //     key={idx} 
        //     id={robots[idx].id} 
        //     name={robots[idx].name} 
        //     email={robots[idx].email}
        //     />
        //     );
        // })
        return(
            <div>
                {
                    robots.map((user, idx)=>{
                        return (<Card 
                        key={idx} 
                        id={robots[idx].id} 
                        name={robots[idx].name} 
                        email={robots[idx].email}
                        />
                        );
                    })
                }

            </div>
        );
    }
}

export default CardList;