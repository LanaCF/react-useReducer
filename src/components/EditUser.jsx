import React, { useContext, useState } from 'react';
import { UsersContext, toggleEditMode } from '../context/users';

const EditUser = ({ userId }) => {
    const [, dispatch] = useContext(UsersContext);
    const [toggle, setToggle] = useState(true);

    const handlerEdit = () => {
        dispatch(toggleEditMode(userId));
        setToggle(prev => !prev);
    }

    return (
        <>
            <button onClick={ handlerEdit } className='edit'>{ toggle ? 'Edit' : 'Save' }</button>
        </>
    );
};

export default EditUser;