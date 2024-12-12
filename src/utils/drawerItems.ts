import { USER_ROLE } from "@/constants/role";
import { DrawerItem, userRole } from "@/types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import TryIcon from '@mui/icons-material/Try';


export const drawerItems = (role: userRole) : DrawerItem[] => {
  const roleMenus : DrawerItem[] = [];
  switch(role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push({
        title: "Dashboard",
        path: `${role}`,
        icon: DashboardIcon,
      },
      {
        title: "Manage Users",
        path: `${role}/manage-users`,
        icon: PeopleAltIcon,
      }); 
    break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
        title: "Dashboard",
        path: `${role}`,
        icon: DashboardIcon,
        },
        {
        title: "Specialties",
        path: `${role}/specialties`,
        icon: TryIcon,
        },
        {
        title: "Doctors",
        path: `${role}/doctors`,
        icon: MedicalInformationIcon,
        },
        {
        title: "Schedules",
        path: `${role}/schedules`,
        icon: CalendarMonthIcon,
        },
        {
        title: "Appointments",
        path: `${role}/appointments`,
        icon: CalendarMonthIcon,
        },
        {
        title: "Reviews",
        path: `${role}/reviews`,
        icon: CalendarMonthIcon,
        },
        
      ); 
    break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
          },
          {
            title: "Schedules",
            path: `${role}/schedule`,
            icon: CalendarMonthIcon,
          },
          {
          title: "Appoinments",
          path: `${role}/appoinment`,
          icon: CalendarMonthIcon,
          }
      ); 
    break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: CalendarMonthIcon,
          },
          {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: DashboardIcon,
          },
          {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: DashboardIcon,
          },
      );
      break;
  }
  return [...roleMenus]
}