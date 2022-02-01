// The job of the Route component is to define different paths in the URL and which component should be loaded for these diff paths.
import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  // localhost:3000/ = domain..part afterwards is the path like /products, /favorites, etc...

  return(
    <div>
      <Route path='/'>
        <AllMeetupsPage /> {/* default component to display  */}
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route> {/* We see the "Nested" output with the AllMeetupsPage ALWAYS rendering because any other component includes it */}
    </div>
  );
}

export default App;
