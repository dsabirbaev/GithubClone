import Link from "next/link";
import { Logo, Slash, ArrowDown, Bell, Plus } from "../Icons";


const index = () => {
    return (
        <header className="bg-[#161B22]">
            <div className="px-5">
                <nav className="h-[68px] flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <Link href="/"><Logo/></Link>
                        <div className="flex rounded-[5px] bg-[#0D1117] border border-[#282C31] p-[1px] pl-[12px] h-[28px]">
                            <input className="bg-transparent outline-none text-white placeholder:text-[13px] placeholder:tracking-[-0.26px] placeholder:font-semibold" type="text" placeholder="Search or jump to..."/>
                            <Slash/>
                        </div>

                        <ul className="flex items-center gap-x-4 text-white font-bold">
                            <li><a href="#">Pull requests</a></li>
                            <li><a href="#">Issues</a></li>
                            <li><a href="#">Codespaces</a></li>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Explore</a></li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-x-[12px]">
                        <Bell/>
                        <div className="flex gap-x-1 items-center">
                            <Plus/>
                            <ArrowDown/>
                        </div>
                        <div className="flex items-center gap-x-1">
                            
                            <span className="w-6 h-6 rounded-full bg-gray-400"></span>
                            <ArrowDown/>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;