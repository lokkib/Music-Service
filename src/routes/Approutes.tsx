import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Error from '../pages/error/Error';
import Tracks from '../pages/Main/MainPage';
import PlaylistPage from '../pages/Playlists/PlaylistPage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import UserTracksPage from '../pages/UserTracks/UserTracksPage';

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
            path="/main"
            element={
                <ProtectedRoute>
                    <Tracks />
                </ProtectedRoute>
            }
        />
        <Route
            path="/mytracks"
            element={
                <ProtectedRoute>
                    <UserTracksPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/playlist/:id"
            element={
                <ProtectedRoute>
                    <PlaylistPage />
                </ProtectedRoute>
            }
        />
        <Route path="*" element={<Error />} />
    </Routes>
);
