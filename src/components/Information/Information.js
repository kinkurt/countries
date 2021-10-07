import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import {useEffect,useState } from 'react';
import axios from 'axios';
import './Information.css';

const Information = ({country}) =>{
 
    const [countryDetails, setCountryDetails] = useState([]);
    const [countryCovid, setCountryCovid] = useState([]);
    

    // const countryDetailsApi = async()=>{
    //     try{
    //         const details = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
    //         setCountryDetails(details.data);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // };

    const countryDetailsApi = async()=>{
        try{
            const details = await axios.get(`https://api.covid19api.com/country/${country}/status/confirmed?from=2020-03-01T00:00:00Z&to=2021-04-01T00:00:00Z`);
            setCountryDetails(details.data);
        }
        catch(error){
            console.log(error);
        }
        console.log(country);
        console.log(JSON.stringify(countryDetails));
        console.log(countryDetails.cases);
    };

    


    useEffect(() => {
        countryDetailsApi();
    },[country]);
    

    return(
        <div>
            <h1>{country}</h1>
            {/* <div>{countryDetails === "" ? (<span>Error</span>) : 
            (countryDetails.map((details) => 
            (
            
            <TableContainer key="tablecontainer" component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow key={country}>
                        <TableCell className="coloumSize">Info</TableCell>
                        <TableCell align="left">Data</TableCell>
                    </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        <TableRow key="Native name">
                            <TableCell component="th" scope="row">
                                Native name
                            </TableCell>
                            <TableCell align="left">{details.nativeName}</TableCell>
                        </TableRow>
                        <TableRow key="Region">
                            <TableCell component="th" scope="row">
                                Region
                            </TableCell>
                            <TableCell align="left">{details.region}</TableCell>
                        </TableRow>
                        <TableRow key="Alpha-2 code">
                            <TableCell component="th" scope="row">
                                Alpha-2 code
                            </TableCell>
                            <TableCell align="left">{details.alpha2Code}</TableCell>
                        </TableRow>
                        <TableRow key="CIOC">
                            <TableCell component="th" scope="row">
                                CIOC
                            </TableCell>
                            <TableCell align="left">{details.cioc}</TableCell>
                        </TableRow>
                        <TableRow key="Population">
                            <TableCell component="th" scope="row">
                                Population
                            </TableCell>
                            <TableCell align="left">{details.population}</TableCell>
                        </TableRow>
                        <TableRow key="Timezone">
                            <TableCell component="th" scope="row">
                                Timezone
                            </TableCell>
                            <TableCell align="left">{details.timezones}</TableCell>
                        </TableRow>
                        <TableRow key="Currencies">
                            <TableCell component="th" scope="row">
                                Currencies
                            </TableCell>
                            <TableCell align="left">{details.currencies.map((currencies) => (<span key={currencies.name}>{currencies.name} - {currencies.symbol}</span> ))}</TableCell>
                        </TableRow>
                        <TableRow key="Language">
                            <TableCell component="th" scope="row">
                                Language
                            </TableCell>
                            <TableCell align="left">{details.languages.map((languages) => (<span key={languages.name}>{languages.name} </span> ))}</TableCell>
                        </TableRow>

                    
                    </TableBody>
                    
                </Table>
            </TableContainer>
            )))}
            </div> */}
            
            
        </div>


// <TableContainer key="tablecontainer" component={Paper}>
            //     <Table  aria-label="simple table">
            //         <TableHead>
            //         <TableRow key={country}>
            //             <TableCell className="coloumSize">Info</TableCell>
            //             <TableCell align="left">Data</TableCell>
            //         </TableRow>
            //         </TableHead>
                    
            //         <TableBody>
            //             <TableRow key="Native name">
            //                 <TableCell component="th" scope="row">
            //                     Native name
            //                 </TableCell>
            //                 <TableCell align="left">{details.nativeName}</TableCell>
            //             </TableRow>
            //             <TableRow key="Region">
            //                 <TableCell component="th" scope="row">
            //                     Region
            //                 </TableCell>
            //                 <TableCell align="left">{details.region}</TableCell>
            //             </TableRow>
            //             <TableRow key="Alpha-2 code">
            //                 <TableCell component="th" scope="row">
            //                     Alpha-2 code
            //                 </TableCell>
            //                 <TableCell align="left">{details.alpha2Code}</TableCell>
            //             </TableRow>
            //             <TableRow key="CIOC">
            //                 <TableCell component="th" scope="row">
            //                     CIOC
            //                 </TableCell>
            //                 <TableCell align="left">{details.cioc}</TableCell>
            //             </TableRow>
            //             <TableRow key="Population">
            //                 <TableCell component="th" scope="row">
            //                     Population
            //                 </TableCell>
            //                 <TableCell align="left">{details.population}</TableCell>
            //             </TableRow>
            //             <TableRow key="Timezone">
            //                 <TableCell component="th" scope="row">
            //                     Timezone
            //                 </TableCell>
            //                 <TableCell align="left">{details.timezones}</TableCell>
            //             </TableRow>
            //             <TableRow key="Currencies">
            //                 <TableCell component="th" scope="row">
            //                     Currencies
            //                 </TableCell>
            //                 <TableCell align="left">{details.currencies.map((currencies) => (<span key={currencies.name}>{currencies.name} - {currencies.symbol}</span> ))}</TableCell>
            //             </TableRow>
            //             <TableRow key="Language">
            //                 <TableCell component="th" scope="row">
            //                     Language
            //                 </TableCell>
            //                 <TableCell align="left">{details.languages.map((languages) => (<span key={languages.name}>{languages.name} </span> ))}</TableCell>
            //             </TableRow>

                    
            //         </TableBody>
                    
            //     </Table>


        // <div>{countryDetails === "" ? (<span>Error</span>) : 
        //     (countryDetails.map((details) => 
        //     (<div key={details.name} >
        //      <ul className="no-bullets-list">
        //      <li>Native name: {details.nativeName}</li>
        //      <li>Alpha-2 code: {details.alpha2Code} </li> 
        //      <li>Region: {details.region}</li>
        //      <li>CIOC: {details.cioc} </li>
        //      <li>Population: {details.population}</li>
        //      <li>Timezone: {details.timezones}</li>
        //      <li>Currencies: {details.currencies.map((currencies) => (<span>{currencies.name} - {currencies.symbol}</span> ))}</li>
        //      <li>Language: {details.languages.map((languages) => (<span>{languages.name} </span> ))}</li>
        //      </ul></div>)))}</div>
        
    )

    
};

export default Information;

