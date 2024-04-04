import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import LibraryCatalog from '../components/Library/LibraryCatalog';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) => 
                    <Route key={path} path={path} Component={Component}/>
                )}
                <Route path='*' Component={LibraryCatalog}/>
        </Routes>
    );
};

export default AppRouter;