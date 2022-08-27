import * as React from "react";
import { Link, NavLink } from "react-router-dom";
type HomeProps = {
    //
};

const Home: React.FC<any> = () => {
    return <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
            <div className="px-2 text-[35px] font-jost text-[#051622] ">
                Kranti Academy</div>
            <div className="">
                <nav>
                    <ul className="text-[#051622] mt-3 flex justify-end ">
                        <li className="mr-4 hover:font-normal hover:drop-shadow">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow">
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow">
                            <Link to="/news">News</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
};

export default Home;
