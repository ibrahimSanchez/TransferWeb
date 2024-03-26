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
import PropTypes from 'prop-types';




export const List1MUI = ({ arrList = [], handleDelete, handleUpdate }) => {

    const [checked, setChecked] = React.useState([]);

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

    const [checkAll, setCheckAll] = React.useState(false);

    const handleSelectAll = () => {

        let check = [];

        if (checkAll) {
            setChecked([]);
            setCheckAll(false)
        }
        else {
            arrList.map(item => {
                check.push(item.id);
                // console.log(item.id)
            })
            setChecked(check);
            setCheckAll(true)
        }
    }


    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            className='shadow p-4 m-5 rounded'
        >
            {
                arrList.length > 0 ?
                    arrList.map(({ nombre, id }, i) => {
                        const labelId = `checkbox-list-label-${id}`;

                        return (
                            <div key={nombre + i}>
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
                                                onClick={() => handleDelete([id])} //enviar solo id para q pinche
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
                    : <p className='text-center'>No hay facturas que mostrar</p>
            }

            {
                arrList.length > 0 &&
                <ListItem
                    secondaryAction={
                        <>
                            {
                                checked.length > 0 &&
                                <button
                                    className='btn btn-danger'
                                    onClick={() => {
                                        setCheckAll(false)
                                        handleDelete(checked)
                                        setChecked([])
                                    }}
                                >
                                    Eliminar
                                </button>
                            }
                        </>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={() => { }} dense>
                        <ListItemIcon className='d-flex align-items-center'>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                checked={checkAll}
                                className='text-success'
                                onClick={handleSelectAll}
                            />
                            <label>Seleccionar todos</label>
                        </ListItemIcon>

                    </ListItemButton>
                </ListItem>
            }
        </List >
    );
}



List1MUI.propTypes = {
    arrList: PropTypes.array,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func.isRequired
}