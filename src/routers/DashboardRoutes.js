import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';

import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path='/marvel' component={ MarvelScreen } />
                    <Route exact path='/hero/:heroeId' component={ HeroesScreen } />
                    <Route exact path='/dc' component={ DcScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
