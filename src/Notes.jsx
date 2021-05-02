import react from 'react';
import './index.css'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

// onClick = {props.onSelect(props.id)}

const Notes = (props) => {

    function deleted(){
        props.onSelect(props.id)
    }
    return(
        <>
        <div class = 'main'>
        <div className= 'section'>
            <div className = 'listNotes'>
                <Button onClick = {deleted} className= 'btn1' >
                    <Fab color = 'secondary'>
                    <DeleteOutlineIcon  className= 'delbtn'>

                    </DeleteOutlineIcon>
                    </Fab>
                </Button>
                <h2 style={{fontWeight: "bolder"}}>{props.title}</h2><br/>
                <p>{props.para}</p>
            </div>
        </div>
        </div>
        </>
    );
}

export default Notes;