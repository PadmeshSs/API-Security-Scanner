import { House, Clock, Mail, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';



export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState("option1");

    return(
        <>
        <nav className='navbar-cont text-white flex'>
            <div className={`sidebar w-[320px] lg:w-90 bg-[#1f1f2d] flex flex-col gap-20 h-screen p-5 lg:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out fixed lg:relative z-50`}>
                <div className="logo flex items-center justify-between">
                    <a href="" className="flex gap-5 justify-center font-bold text-xl">
                        <img src="./logo.png" alt="" />
                        <div className="logo-text flex items-center"><span>API Security<br />Dashboard</span>  </div>
                    </a>
                    <X size={35} className="cursor-pointer lg:hidden"  onClick={() => setIsMenuOpen(false)}/>
                </div>
                <div className="menu text-[#C2C2C2] text-[18px] [&>div]:p-3 [&>div]:gap-5 [&>div]:flex [&>div]:justify-between [&>div]:rounded-lg [&>div:hover]:border-l-[#1C78F6] [&>div:hover]:text-white [&>div.active]:text-white [&>div.active]:border-l-[#1C78F6] [&>div.active]:bg-[#2B2B3A] [&>div:hover]:bg-[#2B2B3A] [&>div]:border-l-[5px] [&>div]:border-transparent [&_div.option-text]:w-full flex flex-col gap-3 [&>div]:transition-all [&>div]:duration-200 [&>div]:ease-in-out [&>div]:cursor-pointer">
                    <div className={`option1 ${activeOption === "option1" ? "active" : ""}`} onClick={()=>{setActiveOption("option1")}}>
                        <House size={30} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Scan Dashboard</span></div>
                    </div>
                    <div className={`option2 ${activeOption === "option2" ? "active" : ""}`} onClick={()=>{setActiveOption("option2")}}>
                        <Clock size={30} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Scan History</span></div>
                    </div>
                    <div className={`option3 ${activeOption === "option3" ? "active" : ""}`} onClick={()=>{setActiveOption("option3")}}>
                        <Mail size={30} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Reports</span></div>
                    </div>
                    <div className={`option4 ${activeOption === "option4" ? "active" : ""}`} onClick={()=>{setActiveOption("option4")}}>
                        <Settings size={30} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Settings</span></div>
                    </div>
                </div>
            </div>
            <div className="main flex-1">
                <div className="relative flex items-center h-16 px-6">

                    <Menu
                    size={35}
                    className="cursor-pointer lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    <div className="absolute left-1/2 -translate-x-1/2 text-[21px] sm:text-2xl font-medium">
                        Scan Dashboard
                    </div>

                </div>
            </div>



            
        </nav>
            {/* <nav className="navbar-container text-white fixed left-0 top-0 bg-[#1F1F2D] h-full w-64 p-7.5 flex gap-20 flex-col z-50">
                <div className="logo w-full ">
                    <a href="" className="flex gap-5 justify-center  font-bold lg:text-2xl md:text-[24px]">
                        <img src="./logo.png" alt="" />
                        <div className="logo-text text-center">API Security <br />Dashboard</div>
                    </a>
                </div>
                <div className="menu font-medium  text-[#C2C2C2] lg:text-[19px] [&>div]:p-3 [&>div]:gap-5 [&>div]:flex [&>div]:justify-between [&>div]:rounded-lg [&>div:hover]:border-l-[#1C78F6] [&>div:hover]:text-white [&>div.active]:text-white [&>div.active]:border-l-[#1C78F6] [&>div.active]:bg-[#2B2B3A] [&>div:hover]:bg-[#2B2B3A] [&>div]:border-l-[5px] [&>div]:border-transparent [&_div.option-text]:w-full flex flex-col gap-3 [&>div]:transition-all [&>div]:duration-200 [&>div]:ease-in-out [&>div]:cursor-pointer">
                    <div className="option1 active">
                        <House size={35} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Scan Dashboard</span></div>
                    </div>
                    <div className="option2">
                        <Clock size={35} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Scan History</span></div>
                    </div>
                    <div className="option3">
                        <Mail size={35} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Reports</span></div>
                    </div>
                    <div className="option4">
                        <Settings size={35} className='icons'/> 
                        <div className="option-text flex items-center"> <span>Settings</span></div>
                    </div>
                </div>
            </nav>

            <nav className="w-full fixed top-0 left-0 bg-[#1F1F2D] text-white z-40">
            <div className="relative flex items-center h-16 px-6">
                <Menu size={35} className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}/>

                <div className="absolute left-1/2 -translate-x-1/2 text-2xl font-medium">
                    Scan Dashboard
                </div>
            </div>
            </nav>         */}
        </>
    );
}