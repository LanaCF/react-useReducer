import { useContext } from "react";
import { UsersContext, editUser, removedUser, toggleEditMode } from "../context/users";
import DelUser from "./DelUser";
import EditUser from "./EditUser";

const Users = () => {
    const [users, dispatch] = useContext(UsersContext);

    const handleEdit = (id, title) => {
        dispatch(editUser({ id, title }));
    }

    const handleDelete = (id) => {
        dispatch(removedUser(id));
    }

    const handleToggleEdit = (id) => {
        dispatch(toggleEditMode(id));
    }

    return (
        <div className="users">
            {users.map(user => (
                <div key={user.id} className="user">
                    <DelUser userId={user.id} onDelete={handleDelete} />
                    <EditUser userId={user.id} onToggleEdit={handleToggleEdit} />
                    <textarea
                        className={user.editMode ? 'user__title active' : 'user__title'}
                        disabled={!user.editMode}
                        onChange={(e) => handleEdit(user.id, e.target.value)}
                        value={user.title}
                    />
                </div>
            ))}
        </div>
    );
};

export default Users;










// import { useContext, useState } from "react";
// import { UsersContext } from "../context/users";
// import DelUser from "./DelUser";
// import EditUser from "./EditUser";

// const Users = ( { counter } ) => {
//     const [users, dispatch] = useContext(UsersContext);
//     const [toggle, setToggle] = useState(true);

//     return (
//         <div className="users">

//             {
//                 users.map( user => (
//                     <div key={ user.id } className="user">
//                         <DelUser userId={ user.id } />
//                         <EditUser />
//                         <textarea className={ toggle ? 'user__title' : 'user__title active' } disabled={toggle} >{ user.title }</textarea>
//                     </div>
//                 ))
//             }

//         </div>
//     );
// };

// export default Users;