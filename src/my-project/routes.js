// RouteUser.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './accuel';
import Sign from './sign-up';
import { UserProvider } from './context';
import ListeUsers from './listUsers';
import About from './aboutLays';
import Cards from './cards';


const RouteLays = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/Lays" element={< Accueil />} />
                    <Route path='/accueil' element={< Accueil />} />
                    <Route path="/sign-up" element={< Sign />} />
                    <Route path="/liste-users" element={< ListeUsers />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/Cards" element={< Cards />} />


                    


                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

export default RouteLays;