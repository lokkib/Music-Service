import { Route, Routes } from 'react-router-dom';

import Error from '../pages/Error/Error';
import Tracks from '../pages/Main/MainPage';
import PlaylistPage from '../pages/Playlists/PlaylistPage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import UserTracksPage from '../pages/UserTracks/UserTracksPage';

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<Tracks />} />
        <Route path="/mytracks" element={<UserTracksPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="*" element={<Error />} />
    </Routes>
);
