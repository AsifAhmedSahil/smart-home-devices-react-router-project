import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import router from "./components/route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
