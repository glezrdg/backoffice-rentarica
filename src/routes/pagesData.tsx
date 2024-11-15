import { routerType } from "../types/router.types";
import { authPages } from "./Auth";
import { adminPages } from "./admin/Dashboard";

const pagesData: routerType[] = [...adminPages];

export default pagesData;
