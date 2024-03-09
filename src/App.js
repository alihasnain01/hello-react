import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";

// ceating HTML element using React const parent = React.createElement('div', {
// id: "parent" }, [React.createElement('div', { id: "child1" }, [
// React.createElement('h1', { id: "heading" }, 'I am tag h1'),
// React.createElement('h2', { id: "" }, 'I am tag h2')     ]),
// React.createElement('div', { id: "child2" }, [ React.createElement('h3', {
// id: "heading" }, 'I am tag h3'), React.createElement('h4', { id: "" }, 'I am
// tag h4')     ]) ]); Creating HTML element using JSX const jsxHeading = (
// <h1 id="heading" tabIndex="1"> Hello React World🚀{" "}   </h1> ); const
// Title = () => (   <h1 id="heading" tabIndex="1">     Hello React World🚀{" "}
//   </h1> ); const HeadingComponent = () => (   <div className="container">
// <Title />     <h1> First functional component </h1>{" "}   </div> );

const AppLayout = () => {
  const [userName, setUserName] = useState("Ali");
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
