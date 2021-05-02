import react, {useState} from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
// import { List } from '@material-ui/core';

const CreateNote = (props) => {
    const [notes, newnotes] = useState({
        title: '',
        para: ''
    });

    function Content(event){
        const {name, value} = event.target;

        newnotes((preValue) =>{
            return {
                ...preValue,
                [name] : value
            }
        })
    }
    function List(){
        props.onSelect(notes);

        newnotes({
            title: '',
            para: ''
        });
    }

    return(
            <div className='node'>
                <div className='note'>
                    <Grid className='input'>
                        <TextField 
                            value ={notes.title}
                            name = "title" 
                            onChange={Content} 
                            label="Title">
                        </TextField>
                    </Grid>
                    <TextField
                        onChange={Content}
                        name = 'para'
                        value = {notes.para}
                        id="outlined-multiline-static"
                        label="Wrte a note"
                        multiline
                        columns = {50}
                        rows={3}
                        variant="outlined"
                    />
                    {/* <Grid item className='input'>
                        <TextField label="Write a note"></TextField>
                    </Grid> */}
                    <Button className='btn' onClick = {List}>
                    <Fab  
                        color = 'secondary' 
                        >
                        <AddIcon></AddIcon>
                    </Fab>
                    </Button>
                </div>
            </div>
        );
}

export default CreateNote;