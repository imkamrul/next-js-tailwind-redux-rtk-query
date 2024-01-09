import CRIcon from "@/components/Common/Icons/CRIcon";
import AnalyticsReportIcon from "@/components/Common/Icons/CexUpdateIcon";
import DashboardIcon from "@/components/Common/Icons/DashboardIcon";
import EmailIcon from "@/components/Common/Icons/EmailIcon";
import InvestigationIcon from "@/components/Common/Icons/InvestigationIcon";
import { SidebarListType } from "@/types/layoutTypes";

export const SidebarList: SidebarListType = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    sabMenu: false,
  },
  {
    name: "Investigation",
    path: "/investigation",
    icon: <InvestigationIcon />,
    sabMenu: false,
  },
  {
    name: "Analytical Report",
    path: "/analytical-report",
    icon: <AnalyticsReportIcon />,
    sabMenu: false,
  },
  {
    name: "CEx Account Updates",
    path: "#",
    icon: "contact",
    sabMenu: true,
    list: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    name: "CR",
    path: "/cr",
    icon: <CRIcon />,
    sabMenu: false,
  },
  {
    name: "Email",
    path: "#",
    icon: <EmailIcon />,
    sabMenu: true,
    list: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
    ],
  },
];
