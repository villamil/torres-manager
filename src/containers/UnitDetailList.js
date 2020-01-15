import React from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";

export default function UnitList() {
  let history = useHistory();
  function openDetail(data) {
    history.push(`/units/${data.id}`);
  }
  return (
    <MaterialTable
      columns={[
        { title: "Numero", field: "number" },
        { title: "Sección", field: "section" },
        { title: "Código ", field: "code" },
        {
          title: "Mantenimiento",
          field: "meintenance",
          type: "currency",
          currencySetting: {
            currencyCode: "MXN",
            minimumFractionDigits: 2
          },
          cellStyle: {
            textAlign: "left"
          }
        },
        {
          title: "Agua",
          field: "water",
          type: "currency",
          currencySetting: {
            currencyCode: "MXN",
            minimumFractionDigits: 2
          },
          cellStyle: {
            textAlign: "left"
          }
        },
        { title: "", field: "id", hidden: true }
      ]}
      data={[
        {
          id: "123123",
          number: "101",
          section: "A",
          meintenance: 1987,
          water: 63,
          code: "HOFKAKK"
        },
        {
          id: "129393",
          number: "102",
          section: "A",
          meintenance: 1987,
          water: 63,
          code: "IDOO312"
        }
      ]}
      title=""
      onRowClick={(event, rowData) => openDetail(rowData)}
    />
  );
}
