import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./Styles/App.scss";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
function App() {
  function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
