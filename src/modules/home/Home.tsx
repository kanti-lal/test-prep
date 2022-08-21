import * as React from "react";
type HomeProps = {
    //
};

const Home: React.FC<any> = () => {
    return <div>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
            <div className="grid lg:grid-cols-2 grid-cols-1 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
                <div className="px-2 text-[35px] font-jost text-[#051622] ">
                    Kranti Academy</div>
                <div className="">
                    <ul className="text-[#051622] mt-3 flex justify-end ">
                        <li className="mr-4 hover:font-normal hover:drop-shadow"><a className="" href="#news">News</a></li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow"><a href="#contact">React</a></li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow "><a href="#about">Redux</a></li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow "><a href="#about">Contact</a></li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow "><a href="#about">Others</a></li>
                        <li className="mr-4 hover:font-normal hover:drop-shadow "><a href="#about">About</a></li>
                    </ul>

                    
                </div>
            </div>
        </div>
    </div>;
};

export default Home;
