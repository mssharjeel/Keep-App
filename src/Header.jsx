import react from 'react';
import AppBar from '@material-ui/core/AppBar';
import Image from './ms.png';

const Header = () => {
    return(
        <AppBar> 
            <div className= "header">
                <img src={Image} width='90' />
                <h1>Muhammad Sharjeel</h1>
            </div>
        </AppBar>
    );
}

export default Header;