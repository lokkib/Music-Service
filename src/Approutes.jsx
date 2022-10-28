import { Route, Routes } from 'react-router-dom';

import Error from './pages/error/Error';
import SignIn from './pages/login/SignIn';
import Tracks from './pages/main/Tracks';
import MyTracks from './pages/mytracks/MyTracks';
import Playlist from './pages/playlists/playlistComponents/Playlist';
import SignUp from './pages/registration/SignUp';
// import ProtectedRoute from './protectedroute/ProtectedRoute';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
                path="/main"
                element={
                    <Tracks />
                    // <ProtectedRoute >
                       
                    // </ProtectedRoute>
                }
            />
            <Route path="/mytracks" element={<MyTracks />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};
