import { adaptedReport } from "../../../utility/handleExcelObject"
import * as XLSX from 'xlsx'

export const downloadReports = (report: any) => {
  if (report) {
    const reportAdapted = adaptedReport(report)
    // Convert the object to an array of key-value pairs
    // let dataArray = Object.entries(reportAdapted).map(([key, value]) => {
    //   // Convert objects in the "procesos" array to strings
    //   if (key === "procesos" && Array.isArray(value)) {
    //     value = value.map((item) => JSON.stringify(item));
    //     console.log(value[0], "value");
    //   }
    //   return [key, value];
    // });
    // Convert the object to an array of key-value pairs
    // Separate the "procesos" array from the rest of the data
    const { Productos, ...restOfData } = reportAdapted

    // Convert the rest of the data to an array of key-value pairs
    const dataArray = Object.entries(restOfData)

    // Convert the "procesos" array to a worksheet
    const productosWS = XLSX.utils.json_to_sheet(Productos)
    // const usersWS = XLSX.utils.json_to_sheet(userAdapted)

    // Convert the rest of the data to a worksheet
    const dataWS = XLSX.utils.aoa_to_sheet(dataArray)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, dataWS, 'Report general')
    XLSX.utils.book_append_sheet(wb, productosWS, 'Productos')
    // XLSX.utils.book_append_sheet(wb, usersWS, 'Usuarios')
    XLSX.writeFile(wb, 'Reporte.xlsx')
  } else {
    alert('No hay datos para descargar')
  }
}