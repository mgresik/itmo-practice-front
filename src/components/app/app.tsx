import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "../../consts";
import MainPage from "../../pages/main";
import MindMapPage from "../../pages/mindmap-page";
import Page404 from "../../pages/page-404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRouter.Main} element={<MainPage />} />
                <Route path={AppRouter.MindMap} element={<MindMapPage />} />
                <Route path={AppRouter.Page404} element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
