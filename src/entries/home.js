import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')


//const holamundo = <h1>hola Estudiantes!!!! </h1>;
render(<Home data={data}/>,homeContainer);