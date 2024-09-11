import { IReport } from "../pages/Reports/models/report.model";
import { dateFormat } from "./dateFormat";

const excludeHeaders = ["_id", "__v", "createdAt", "updatedAt"];

export const adaptedReport = (report: IReport) => {
  const filteredReport = {
    Ganancias: report?.sellsReport?.totalAmonutWin || 0,
    Ventas: report?.sellsReport?.totalAmonutSell || 0,
    Inversiones: report?.shoppingReport?.totalAmountBuy || 0,
    Productos_Vendidos: report?.sellsReport?.ordersQty || 0,
    Productos: report?.sellsReport?.productsQty?.map((i: any) => ({
      name: i.product.name,
      qty: i.qty,
    })) || [],
  };
  return filteredReport;
};

// export const adaptedUsersReport = (users: any[]) => {
//   const filteredUsers = users.map((user) => ({
//     name: user.user.name,
//     eficiencia: user.activitiesEficiencia,
//     completados: user.activities.length,
//     devoluciones: user.devoluciones.length,
//   }));
//   return filteredUsers;
// };

export const HandleCleanHeadersReport = (headers: string[]) => {
  let cleanHeaders = headers.filter((item) => !excludeHeaders.includes(item));
  return cleanHeaders;
};
