import { House } from 'lucide-react';

export default function Navbar(){
    return(
        <>
            <nav className="navbar-container text-white fixed left-0 top-0 bg-[#1F1F2D] h-full w-75 p-7.5">
                <div className="logo w-full ">
                    <a href="" className="flex gap-5 justify-center  font-bold lg:text-2xl">
                        <img src="./logo.png" alt="" width={50} />
                        <div className="logo-text text-center">API Security <br />Dashboard</div>
                    </a>
                </div>
                <div className="menu font-medium lg:text-[20px]">
                    <div className="option1 bg-black flex relative justify-center gap-3">
                        <House className='fixed top-0 left-0' /> 
                        <div className="option-text">Scan Dashboard</div>
                    </div>
                    <div className="option2">
                        Scan Results
                    </div>
                    <div className="option3">
                        Reports
                    </div>
                    <div className="option4">
                        settings
                    </div>
                </div>
            </nav>
        </>
    );
}