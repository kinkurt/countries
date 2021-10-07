import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import {useEffect,useState } from 'react';
import './CountrySummary.css';
import axios from 'axios';

const CountrySummary = () =>{
    const [countryData, setCountryData] = useState([]);
    const [globalData, setGlobalData] = useState([]);
    

    const countrySummaryApi = async()=>{
        try{
            const details = await axios.get(`https://api.covid19api.com/summary`);
            setCountryData(details.data.Countries);
            setGlobalData(details.data.Global);
        }
        catch(error){
            console.log(error);
        }
        console.log(countryData);
    };

    useEffect(() => {
        countrySummaryApi();
    },[]);

    
    return(
        <div>
            <h1>Data</h1>
            <div>{countryData ===  "" ? (<span>There was an error</span>) : 
            (
            
            
            <TableContainer key="tablecontainer" component={Paper}>
                <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell align="left">New Confirmed</TableCell>
                    <TableCell align="left">Total Confirmed</TableCell>
                    <TableCell align="left">Total Deaths</TableCell>
                </TableRow>
                </TableHead>
                
                
               <TableBody>
                <TableRow key="global">
                    <TableCell component="th" scope="row">Global
                    </TableCell>
                    <TableCell align="left">{globalData.NewConfirmed}</TableCell>
                    <TableCell align="left">{globalData.TotalConfirmed}</TableCell>
                    <TableCell align="left">{globalData.TotalDeaths}</TableCell>
                </TableRow>
                { countryData.map((data) => (
                    <TableRow key={data.Country}>
                    <TableCell component="th" scope="row">
                        {data.Country}
                    </TableCell>
                    <TableCell align="left">{data.NewConfirmed}</TableCell>
                    <TableCell align="left">{data.TotalConfirmed}</TableCell>
                    <TableCell align="left">{data.TotalDeaths}</TableCell>
                    </TableRow>
                ))} 
                
                </TableBody>
                </Table>
            </TableContainer>
            )}
            </div>
            
            
        </div>


        
    )

    
};

export default CountrySummary;

