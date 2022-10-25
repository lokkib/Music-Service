import { useState } from 'react';

import { AppRoutes } from './Approutes';
import { GlobalStyle } from './GlobalStyle';

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = () => setUser('token');

    const handleLogout = () => setUser(null);

    return (
        <>
            <GlobalStyle />
            <button onClick={handleLogin} style={{ marginLeft: '50%' }}>
                Сгенерировать токен
            </button>
            <button onClick={handleLogout} style={{ marginLeft: '50%' }}>
                Удалить токен
            </button>
            <AppRoutes user={user} />
        </>
    );
}

export default App;
