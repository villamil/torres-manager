import React from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";

export default function UnitMaintenanceDetailList() {
  let history = useHistory();
  function openDetail(data) {
    history.push(`/units/${data.id}`);
  }
  return (
    <MaterialTable
      columns={[
        { title: "Año", field: "year", editable: "never" },
        {
          title: "Mes",
          field: "month",
          lookup: { 1: "Enero", 2: "Febrero" },
          editable: "never"
        },
        {
          title: "Deuda",
          field: "owed",
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
          title: "Pagado",
          field: "paid",
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
          year: "2019",
          month: 1,
          owed: 700,
          paid: 0
        },
        {
          id: "34123",
          year: "2019",
          month: 2,
          owed: 700,
          paid: 700
        }
      ]}
      title="Agua"
      localization={{
        header: {
          actions: "Acciones"
        },
        body: {
          editTooltip: "Editar",
          editRow: {
            saveTooltip: "Guardar",
            cancelTooltip: "Cancelar"
          }
        },
        pagination: {
          labelRowsSelect: "Filas",
          labelDisplayedRows: "{from}-{to} de {count}"
        }
      }}
      options={{ actionsColumnIndex: -1 }}
      editable={{
        onRowUpdate: (newData, oldData) => {
          console.log(newData, oldData);
          return Promise.resolve();
        }
      }}
    />
  );
}
