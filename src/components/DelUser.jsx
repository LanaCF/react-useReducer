import React, { useContext } from 'react';
import { UsersContext, removedUser } from '../context/users';

const DelUser = ( { userId } ) => {
    const [users, dispatch] = useContext(UsersContext);

    const handlerDel = () => {
        dispatch(removedUser(userId));
    }

    return (
        <>
            <button onClick={ handlerDel } className='del-red'>X</button>
        </>
    );
};

export default DelUser;