import { Container, createTheme, Switch } from '@material-ui/core';
import {ThemeProvider  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Information from './components/Information/Information';
import CountrySummary from './components/CountrySummary/CountrySummary';


const App = () => {
    
    const [country, setCountry] = useState(``);
    const [countries, setCountries] = useState([]);
    const [colorTheme, setcolorTheme] = useState(false);
    const [summaryCountryDetails, setSummaryCountryDetails] = useState([]);

    const theme = createTheme({
        palette:{
            type: colorTheme ? "light" :"dark",
        },
    });

    const countriesApi= async()=>{
        try{
            const data = await axios.get(`https://api.covid19api.com/countries`);
            setCountries(data.data);

        }catch(error){
            console.log(error);
        }
    };

    const countrySummaryApi = async()=>{
        try{
            const details = await axios.get(`https://api.covid19api.com/summary`);
            setSummaryCountryDetails(details.data);
        }
        catch(error){
            console.log(error);
        }

        // console.log(summaryCountryDetails);
    };

    useEffect(() => {
        countriesApi();
        countrySummaryApi();
    },[]);


    return(
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App" style={{height:"100vh"}}>
            <Container maxWidth="md" style={{display: "flex", height:"100vh", flexDirection:"column"}}> 
                <a href="https://github.com/kinkurt/countries" target="_blank" rel="noopener noreferrer" style={{position:"absolute",top:0, left:25,paddingTop:10, color:"gray", textDecoration:"none"}}>Github</a>
                <div style={{position:"absolute",top:0, right:15,paddingTop:10, cursor: "default"}}>
                    <span>Toggle light/dark</span>
                    <Switch color="primary" checked={colorTheme} onChange={()=> setcolorTheme(!colorTheme)}/>
                </div>
                <Header country={country} setCountry={setCountry} countries={countries}/>
                {country && <Information country={country} />}
                <CountrySummary countrySummary={summaryCountryDetails}/>
            </Container>
        </div>
        </ThemeProvider>
    );
}

export default App;