import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../../App";
import Home from "./Home";
import Blog from "./modules/blog";
import Contact from "./modules/contact";
import News from "./modules/news";
import Redux from "./modules/redux";
type HomeRoutesProps = {
    //
};

const HomeRoutes: React.FC<any> = () => {
    return <div>


        <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/redux" element={<Redux />} />

        </Routes>
    </div>;
};

export default HomeRoutes;
