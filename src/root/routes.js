import { Route } from "react-router-dom";
import Splash from './Splash.js'
const myRoutes = () => {
  return (
    <Route path="/" element={<Splash />} >
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