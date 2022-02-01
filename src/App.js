import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {

  return (
    <div>
      <Switch> {/* Switch tells React that only ONE of the components should be rendered...this still won't render the right */}
        <Route path='/' exact> {/* adding exact fixes this and makes it so that it keeps looking for the matching component path */}
          <AllMeetupsPage />
        </Route> {/* React Router will stop looking at the others as soon as it finds a match (/) which is why it won't render at first */}
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
