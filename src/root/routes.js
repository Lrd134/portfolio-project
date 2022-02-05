import { Route } from "react-router-dom";
import Layout from "./Layout.js";
import Splash from './Splash.js'
const myRoutes = () => {
  return (
    <Route path="/" element={<Layout />} >
      <Route exact path="/" element={<Splash />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Route>
  )
}

export default myRoutes;