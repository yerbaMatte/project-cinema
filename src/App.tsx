import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import MyAccount from './Pages/MyAccount';
import NowPlayingLayout from './Pages/NowPlayingLayout';
import MoviesDayList from './Components/NowPlaying/MoviesDayList';
import { ModalMovieDetails } from './Components/Home/ModalMovieDetails';
import Home from './Pages/Home';
import RootLayout from './Pages/RootLayout';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: 'home',
          element: <Home />,
          children: [{ path: ':movieTitle', element: <ModalMovieDetails /> }],
        },
        {
          path: 'nowplaying',
          element: <NowPlayingLayout />,
          children: [{ path: ':day', element: <MoviesDayList /> }],
        },
        { path: 'signup', element: <SignUp /> },
        { path: 'signin', element: <SignIn /> },
        { path: 'myaccount', element: <MyAccount /> },
        { index: true, element: <Home /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// add to transfer mac
