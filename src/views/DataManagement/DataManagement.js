import React from "react";
import "./DataManagement.css";
import ConfirmDialog from "../../components/Layout/ConfirmDialog/ConfirmDialog";

const DataManagement = (props) => {
  const [openDelete, setOpenDelete] = React.useState("none");
  const [openDownload, setOpenDownload] = React.useState("none");
  const data = [
    {
      id: 1,
      name: "Vinh",
    },
    {
      id: 2,
      name: "Khuong",
    },
    {
      id: 3,
      name: "Dung",
    },
  ];
  return (
    <div className="DataMangamentContainer">
      <div className="Title">{props.title}</div>
      <div className="Content">
        Content of Data Mangament
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={() => setOpenDownload("flex")}>
                      Download
                    </button>
                    <button onClick={() => setOpenDelete("flex")}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ position: "relative" }}>
          <div style={{ display: openDownload }}>
            <ConfirmDialog
              title="Download"
              subTitle="Are you want to download?"
              okButton="Download"
              cancelButton="Cancel"
            />
          </div>
          <div style={{ display: openDelete }}>
            <ConfirmDialog
              title="Delete"
              subTitle="Are you want to delete?"
              okButton="Delete"
              cancelButton="Cancel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
