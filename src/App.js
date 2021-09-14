import { Container, createTheme, Switch } from '@material-ui/core';
import {ThemeProvider  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Information from './components/Information/Information';


const App = () => {
    
    const [country, setCountry] = useState(``);
    const [countries, setCountries] = useState([]);
    const [colorTheme, setcolorTheme] = useState(false);

    const theme = createTheme({
        palette:{
            type: colorTheme ? "light" :"dark",
        },
    });

    const countriesApi= async()=>{
        try{
            const data = await axios.get(`https://restcountries.eu/rest/v2/all`);
            setCountries(data.data);

        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        countriesApi();
    },[]);


    return(
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App" style={{height:"100vh"}}>
            <Container maxWidth="md" style={{display: "flex", height:"100vh", flexDirection:"column"}}> 
                <a href="https://github.com/kinkurt" target="_blank" rel="noopener noreferrer" style={{position:"absolute",top:0, left:25,paddingTop:10, color:"gray", textDecoration:"none"}}>Github</a>
                <div style={{position:"absolute",top:0, right:15,paddingTop:10, cursor: "default"}}>
                    <span>Toggle light/dark</span>
                    <Switch color="primary" checked={colorTheme} onChange={()=> setcolorTheme(!colorTheme)}/>
                </div>
                <Header country={country} setCountry={setCountry} countries={countries}/>
                {country && <Information country={country} />}
            </Container>
        </div>
        </ThemeProvider>
    );
}

export default App;