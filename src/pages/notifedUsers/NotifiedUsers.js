import React,{useEffect, Suspense} from "react";
import { fetchNotifiedUsers } from "./action";
import { useSelector, useDispatch } from 'react-redux';
const Loading = React.lazy(() => import('../../components/common/Loading/Loading'));
const Table = React.lazy(() => import('../../components/common/Table/Table'));

const NotifiedUsers = () => {

    const notifiedUsersData = useSelector((state) => state.notifiedUsers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotifiedUsers());
    },[])

    return (
        <Suspense fallback={<Loading/>}>
            {
                notifiedUsersData.isLoading 
                ? <Loading/> 
                : <Table 
                    title="Notified User List" 
                    columns={[
                        {columnName: "ID",property: "id"},
                        {columnName: "First Name",property: "firstName"},
                        {columnName: "Last Name",property: "lastName"},
                        {columnName: "Message",property: "message"},
                        {columnName: "Sent Date",property: "dateCreated"},
                    ]} 
                    rows={notifiedUsersData.notifiedUsers.data} 
                    isRowHoverable={false}
                    callBackRow={() => {}}/>
            }
        </Suspense>
    )
}

export default NotifiedUsers;