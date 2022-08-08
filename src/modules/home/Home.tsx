import * as React from "react";

type HomeProps = {
    //
};

const Home: React.FC<any> = () => {
    return <div>
        <div className="min-h-screen bg-yellow-500">
            <div>
                <h1 className="text-white text-[45px] text-center">Kranti Academy</h1>

                <div>
                    <ul  className="list-none">
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
};

export default Home;
