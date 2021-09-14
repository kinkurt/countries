import {  MenuItem, Select,FormControl, InputLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./Header.css";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));
  

 const Header =({country, setCountry, countries}) => {
    const classes = useStyles();
    

     return(
         <div className="header">
             <span className="title">Country information</span>
             <div>
                
                <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={country}
                        onChange={(e)=>setCountry(e.target.value)}
                        label="SelectCountry"
                        >
                        <MenuItem value="" disabled>
                            Country
                        </MenuItem>
                        {countries.map((countryLists) => (
                            <MenuItem key={countryLists.name} value={countryLists.name}>{countryLists.name}</MenuItem>
                        ))}
                        
                    </Select>
                    
                </FormControl>
                
                
             </div>
         </div>
     );
     };

 export default Header;