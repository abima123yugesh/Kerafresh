import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/user/userSlice";
import { Link } from "react-router-dom";

const columns = [
    {
      title: "Sl. No.",
      dataIndex: "key",
      defaultSortOrder: "descent",
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descent",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

const Customers = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers());
    }, [dispatch]);

    const customerState = useSelector((state) => state.user.customers)


    const data = [];
    for (let i=0; i< customerState.length; i++){
        if (customerState[i].role !== "admin"){
            data.push({
                key: i+1,
                name: customerState[i].firstname + " " + customerState[i].lastname,
                email: customerState[i].email,
            })
        }
    }
  return (
        <div>
      <h3 className="mb-4 title">Customers </h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Customers