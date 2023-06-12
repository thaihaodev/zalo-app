import { IRoute } from "./interfaces/route";
import AppLayout from "./layouts/AppLayout";
import Contact from "./pages/Contact";
import Login from "./pages/Login/Login";
import Message from "./pages/Message";
import NotFound from "./pages/NotFound";
import Setting from "./pages/Setting";

const privateRoutes: IRoute[] = [
  {
    path: "message",
    element: <Message />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];
export const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: privateRoutes,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
