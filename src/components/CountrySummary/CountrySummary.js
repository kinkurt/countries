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

const CountrySummary = ({countries,global}) =>{

    return(
        <div>
            <h1>Covid Numbers</h1>
            <div>{countries ===  "" ? (<span>There was an error</span>) : 
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
                    <TableCell align="left">{global.NewConfirmed}</TableCell>
                    <TableCell align="left">{global.TotalConfirmed}</TableCell>
                    <TableCell align="left">{global.TotalDeaths}</TableCell>
                </TableRow>
                {countries.map((data) => (
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

