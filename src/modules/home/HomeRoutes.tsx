import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../../App";
import Home from "./Home";
type HomeRoutesProps = {
    //
};

const HomeRoutes: React.FC<any> = () => {
    return <div>


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Home />} />

                </Route>
            </Routes>
        </BrowserRouter>
    </div>;
};

export default HomeRoutes;
