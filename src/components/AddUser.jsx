import React, { useContext } from 'react';
import { UsersContext, addUser } from '../context/users';

const AddUser = () => {
    const [users, dispatch] = useContext(UsersContext);

    const clickHandler = () => {
        const id = Date.now();
        const number = users.length + 1;

        dispatch(addUser({
            id,
            title: `User ${number}`,
        }));
    }

    return (
        <button onClick={ clickHandler } className='btn-add'>Add user</button>
    );
};

export default AddUser;