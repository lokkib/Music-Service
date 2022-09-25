import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/registration/SignUp';
import Tracks from './pages/main/Tracks';
import MyTracks from './pages/mytracks/MyTracks';
import Playlist from './pages/playlists/playlistComponents/Playlist';
import Error from './pages/error/Error';
import ProtectedRoute from './protectedroute/ProtectedRoute';

export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
                path="/main"
                element={
                    <ProtectedRoute isAllowed={Boolean(user)}>
                        <Tracks />
                    </ProtectedRoute>
                }
            />
            <Route path="/mytracks" element={<MyTracks />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};
