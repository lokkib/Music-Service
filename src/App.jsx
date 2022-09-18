import Main from './components/Main/Main';
import Bar from './components/Bar/Bar';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="container">
                <Main />
                <Bar />
                <footer className="footer"></footer>
            </div>
        </>
    );
}

export default App;
