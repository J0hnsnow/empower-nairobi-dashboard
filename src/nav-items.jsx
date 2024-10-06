import { HomeIcon, BarChartIcon, InfoIcon, LightbulbIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Solutions",
    to: "/solutions",
    icon: <LightbulbIcon className="h-4 w-4" />,
    page: <Solutions />,
  },
];