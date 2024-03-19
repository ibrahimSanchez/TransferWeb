import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';





export const List1MUI = ({ arrList = [], handleDelete = (arr) => { }, handleUpdate }) => {

    const [checked, setChecked] = React.useState([]);


    // console.log(checked)

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            className='shadow p-4 m-5 rounded'
        >
            {
                arrList.length > 0 ?
                    arrList.map(({ nombre, id }) => {
                        const labelId = `checkbox-list-label-${id}`;

                        return (
                            <div key={id}>
                                <ListItem
                                    secondaryAction={
                                        <>
                                            <IconButton
                                                aria-label="comments"
                                                disabled={(checked.length > 0) ? true : false}
                                                onClick={() => handleUpdate(id)}
                                            >
                                                <CreateIcon className='text-success' />
                                            </IconButton>

                                            <IconButton
                                                edge="end"
                                                aria-label="comments"
                                                disabled={(checked.length > 0) ? true : false}
                                                onClick={() => handleDelete(id)} //enviar solo id para q pinche
                                            >
                                                <DeleteIcon className='text-danger' />
                                            </IconButton>
                                        </>
                                    }

                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(id) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                className='text-success'
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={nombre} />
                                    </ListItemButton>
                                </ListItem>
                                <hr />
                            </div>
                        );
                    })
                    : <p className='text-center'>No hay nada</p>
            }
        </List>
    );
}


