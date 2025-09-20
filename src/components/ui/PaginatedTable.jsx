import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import api from "../../lib/axios";

const PaginatedTable = ({ url, columns, rowsPerPage = 10 }) => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const toast = useRef(null);

  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      const response = await api.get(url, { params: { page } });
      const result = await response.data || response;

      setData(result.data || []);
      setMeta(result.meta || {});
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to fetch data",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const onPageChange = (e) => {
    const newPage = e.page + 1; // PrimeReact pages are 0-indexed
    setCurrentPage(newPage);
  };

  return (
    <>
      <Toast ref={toast} />
      {loading && (
        <div className="flex justify-center my-4">
          <ProgressSpinner />
        </div>
      )}
      <DataTable
        value={data}
        paginator
        lazy
        rows={rowsPerPage}
        totalRecords={meta.total}
        first={(currentPage - 1) * rowsPerPage}
        onPage={onPageChange}
        stripedRows
        responsiveLayout="scroll"
        className="p-datatable-gridlines"
      >
        {columns.map((col, index) => (
          <Column
            key={index}
            field={col.field}
            header={col.header}
            body={col.body}
            sortable={col.sortable}
            style={col.style}
          />
        ))}
      </DataTable>
    </>
  );
};

export default PaginatedTable;
