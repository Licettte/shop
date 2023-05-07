import { BrowserRouter, Route, Routes, Link, HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Basket } from './components/Basket';
import { Footer } from './components/Footer';
import { Error } from './components/error/Error';
import { WidthContent } from './styles/widthContent';
import { ListProductCard } from './components/ListProductCard';
import { Content } from './styles/content';

function App() {
    return (
        <HashRouter>
         {/* <BrowserRouter> */}
            <WidthContent>
                <Content>
                    <Header />
                    <Routes>
                        <Route path='/' element={<ListProductCard />} />
                        <Route path='/basket' element={<Basket />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </Content>
                <Footer />
            </WidthContent>
         {/* </BrowserRouter> */}
        </HashRouter>
    );
}

export default App;
