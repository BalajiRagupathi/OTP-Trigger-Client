import React,{useEffect, Suspense, useState} from "react";
import { fetchUsers } from "./action";
import { useSelector, useDispatch } from 'react-redux';
const Loading = React.lazy(() => import('../../components/common/Loading/Loading'));
const Table = React.lazy(() => import('../../components/common/Table/Table'));
const UserDetails = React.lazy(() => import('../../components/UserDetails/UserDetails'));

const Users = () => {

    const [viewUser,setViewUser] = useState(null);

    const toggleViewUser = (user) => {
        setViewUser(user);
    }

    const usersData = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    },[])

    return (
        <Suspense fallback={<Loading/>}>
            {
                usersData.isLoading ? 
                <Loading/> : 
                !viewUser 
                ? <Table 
                    title="User List" 
                    columns={[
                        {columnName: "ID",property: "id"},
                        {columnName: "First Name",property: "firstName"},
                        {columnName: "Last Name",property: "lastName"},
                        {columnName: "Phone Number",property: "phone"}
                    ]} 
                    rows={usersData.users.data} 
                    isRowHoverable={true}
                    callBackRow={toggleViewUser}/>
                : <UserDetails 
                    id={viewUser.id}
                    firstName={viewUser.firstName} 
                    lastName={viewUser.lastName} 
                    phone={viewUser.phone} 
                    image={viewUser.image} 
                    age= {viewUser.age}
                    gender={viewUser.gender}
                    email= {viewUser.email}
                    bloodGroup= {viewUser.bloodGroup}
                    toggleViewUser={toggleViewUser} />
            }
        </Suspense>
    )
}

export default Users;