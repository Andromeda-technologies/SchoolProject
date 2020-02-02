
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import AddStudent from "views/Student/AddStudent.js";
import TableList from "views/TableList/TableList.js";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/add/student",
    name: "Add Student",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: AddStudent,
    layout: "/admin"
  },
  
  {
    path: "/students",
    name: "Students",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  
 
];

export default dashboardRoutes;
