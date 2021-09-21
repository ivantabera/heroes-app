import React, { useMemo } from 'react';

import querString from "query-string";
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroByName } from '../../selector/getHeroByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = querString.parse( location.search );

    const [formValues, handleInputChange] = useForm( {
        searchText : q
    } );

    const { searchText } = formValues;
    
    const heroFiltered = useMemo(() => getHeroByName( q ), [q]) ;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr/>

                    <form onSubmit= {handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    {
                        (q === '') 
                            &&
                                <div className="alert alert-info">
                                    Search a hero
                                </div>
                    }

                    {
                        (q !== '' && heroFiltered.length === 0) 
                            &&
                                <div className="alert alert-danger">
                                    There is not a hero with { q }
                                </div>
                    }

                    {
                        heroFiltered.map( hero => (
                            <HeroeCard
                                key={ hero.id }
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
