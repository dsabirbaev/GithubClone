
import Link from "next/link";
import { Overview, Repository, Project, Package, Star } from "../Icons";


const index = () => {
    return (
        <section className="border-b-[1px] border-[#282C31]">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-center">
                    <nav className="text-[#C2CAD1] text-[14px] font-semibold flex items-center gap-x-6 pt-[40px]">
                        <li className="border-transparent border-b-[1px] hover:border-[#E77960] pb-[10px] duration-200">
                            <Link className="flex items-center gap-x-1" href="/"> <Overview /> Overview</Link>
                        </li>
                        <li className="border-transparent border-b-[1px] hover:border-[#E77960] pb-[10px] duration-200"><Link className="flex items-center gap-x-1" href="/repositories"> <Repository /> Repositories</Link></li>
                        <li className="border-transparent border-b-[1px] hover:border-[#E77960] pb-[10px] duration-200"><Link className="flex items-center gap-x-1" href="/projects"> <Project /> Projects</Link></li>
                        <li className="border-transparent border-b-[1px] hover:border-[#E77960] pb-[10px] duration-200"><Link className="flex items-center gap-x-1" href="/packages"> <Package /> Packages</Link></li>
                        <li className="border-transparent border-b-[1px] hover:border-[#E77960] pb-[10px] duration-200"><Link className="flex items-center gap-x-1" href="/stars"> <Star /> Stars</Link></li>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default index;