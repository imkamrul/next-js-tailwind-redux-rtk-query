import AnalyticsReportIcon from "@/components/Common/Icons/AnalyticsReportIcon";
import CRIcon from "@/components/Common/Icons/CRIcon";
import CexUpdateIcon from "@/components/Common/Icons/CexUpdateIcon";
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
    icon: <CexUpdateIcon />,
    sabMenu: true,
    pageList: ["/test", "/test-2", "/test-3"],
    list: [
      {
        name: "test",
        path: "/test",
      },
      {
        name: "test 2",
        path: "/test-2",
      },
      {
        name: "test 3",
        path: "/test-3",
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
    name: "Payout",
    path: "#",
    icon: <EmailIcon />,
    sabMenu: true,
    pageList: ["/bdev-payouts", "/gdev-payouts", "/tdev-payouts"],
    list: [
      {
        name: "BDev Payouts",
        path: "/bdev-payouts",
      },
      {
        name: "GDev Payouts",
        path: "/gdev-payouts",
      },
      {
        name: "TDev Payouts",
        path: "/tdev-payouts",
      },
    ],
  },
];
