import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import Root from "../components/layouts/Root";
import About from "../components/pages/About";
import University from "../components/pages/University";
import OurServices from "../components/pages/OurServices";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <NotFound/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "universities",
        Component: University,
      },
      {
        path: "ourservices",
        Component: OurServices,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export default AppRoutes