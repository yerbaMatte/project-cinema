import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Store/store';

export const Root = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  return (
    <>
      <MainNavigation isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

// useEffect(() => {
//   auth.onAuthStateChanged((authUser: User | null) => {
//     if (authUser) {
//       dispatch(signActions.setLoggedStatus());
//     }
//   });
// }, []);
