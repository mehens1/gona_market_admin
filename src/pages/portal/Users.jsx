import React from "react";
import PaginatedTable from "../../components/ui/PaginatedTable";
import { usersService } from "../../services/usersServices";
import AlertService from "../../services/alertServices";

export default function Users() {
  const [tableKey, setTableKey] = React.useState(0);

  const ActionButton = ({ onClick, iconClass }) => (
    <button className="btn btn-sm" onClick={onClick}>
      <i className={iconClass} />
    </button>
  );

  const columns = [
    {
      field: "first_name",
      header: "First Name",
      sortable: true,
    },
    {
      field: "last_name",
      header: "Last Name",
      sortable: true,
    },
    {
      field: "email",
      header: "Email",
      sortable: true,
    },
    {
      field: "phone_number",
      header: "Phone Number",
    },
    {
      header: "State",
      body: ({ state }) => state?.state || "-",
    },
    {
      header: "LGA",
      body: ({ lga }) => lga?.lga || "-",
    },
    {
      header: "Action(s)",
      body: (row) => {
        const handleView = () => {
          console.log("View user:", row);
        };

        const handleAccountUpdate = async (status) => {
          const response = await usersService.updateUserStatus(row.id, status);
          console.log("response: ", response);
          if (response.status) {
            AlertService.success(
              `User ${status === 1 ? "activated" : "deactivated"} successfully`
            );
            setTableKey((prev) => prev + 1);
          } else {
            AlertService.error(response.message || "An error occurred");
          }
        };

        return (
          <div className="flex gap-5">
            <ActionButton
              onClick={handleView}
              iconClass="pi pi-eye primary-text"
            />
            {row.is_active === 1 && (
              <ActionButton
                onClick={handleAccountUpdate.bind(this, 0)}
                iconClass="pi pi-times-circle secondary-text"
              />
            )}
            {row.is_active === 0 && (
              <ActionButton
                onClick={handleAccountUpdate.bind(this, 1)}
                iconClass="pi pi-check-circle secondary-text"
              />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex items-center primary-bg text-white p-4 mb-10 rounded-lg">
        <div className="text-slate-700 text-lg text-white">Users</div>
      </div>

      <PaginatedTable key={tableKey} url="users" columns={columns} />
    </>
  );
}
