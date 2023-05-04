import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Table } from "antd";
import { getEnquiries } from "../features/enquiry/enquirySlice";


const columns = [
    {
      title: "Sl. No.",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Message",
      dataIndex: "comment",
    },
    {
      title: "ServiceType",
      dataIndex: "servicetype",
    },
  ];

  const Enquiries = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEnquiries());
      }, [dispatch]);

      const enqState = useSelector((state) => state.enquiry.enquiries);

      const data = [];
      for (let i = 0; i < enqState.length; i++) {
        data.push({
            key: i + 1,
            name: enqState[i].name,
            email: enqState[i].email,
            mobile: enqState[i].mobile,
            comment: enqState[i].comment,
            servicetype: enqState[i].serviceType,
        })
    }
        return (
            <div>
              <h3 className="mb-4 title">Enquiries</h3>
              <div>
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          );
}

export default Enquiries