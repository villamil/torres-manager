import React from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MaterialTable from "material-table";

export default function DetailTable(WrappedTable) {
  function AddLocalization(props) {
    return (
      <WrappedTable
        {...props}
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
          },
          toolbar: {
            searchPlaceholder: "Buscar"
          }
        }}
        options={{ actionsColumnIndex: -1 }}
        actions={[
          {
            icon: () => <AttachFileIcon />,
            tooltip: "Agregar archivo",
            onClick: (event, rowData) => {
              // yeah
            }
          }
        ]}
        detailPanel={rowData => {
          return (
            <div
              style={{
                width: "90%",
                float: "right"
              }}
            >
              <MaterialTable
                title="Adjuntos"
                columns={[
                  {
                    title: "Archivo",
                    field: "fileName"
                  },
                  {
                    title: "Descargar",
                    field: "download",
                    render: rowData => <a href={rowData.download}>Descargar</a>
                  }
                ]}
                data={[
                  {
                    fileName: "101A-2019-01",
                    download: "https://google.com"
                  }
                ]}
              />
            </div>
          );
        }}
      />
    );
  }

  return AddLocalization;
}
