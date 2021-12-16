import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import React from 'react';
import './Header.css';
import categories from '../../data/category';

const Header = ({ setCategory, category, word, setWord, LightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? '#000' : '#FFF',
            },
            type: LightMode ? 'light' : 'dark',
        },
    });

    const handleChange = (lang) => {
        setCategory(lang);
        setWord("");
    }

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search a Word"
                        // label="Standard"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            categories && categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;