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
    const [errorFound, setErrorFound]= useState(false);
    


    const countryDetailsApi = async()=>{
        setErrorFound(false);
        try{
            const details = await axios.get(`https://restcountries.com/v3.1/name/${country}}`);
            setCountryDetails(details.data);
        }
        catch(error){
            console.log(error);
            setErrorFound(true);
        }
    };

    


    useEffect(() => {
        countryDetailsApi();
    },[country]);
    

    return(
        <div>
            <h1>{country}</h1>
            <div>{errorFound === true ? (<span>Oops, Something went wrong</span>) : 
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
                            <TableCell align="left">{details.name.official}</TableCell>
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
                            <TableCell align="left">{details.cca2}</TableCell>
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
                                Flag
                            </TableCell>
                            <TableCell><img src={details.flags.svg} alt={country} height="100px"/></TableCell>
                        </TableRow>
                    </TableBody>
                    
                </Table>
                
            </TableContainer>
            
            )))}
            </div>
            
        </div>



        
    )

    
};

export default Information;

