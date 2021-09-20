import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );
    
    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <HeroeCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
