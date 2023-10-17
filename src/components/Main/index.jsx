
import Link from "next/link";
import { Overview, Repository, Project, Package, Star } from "../Icons";



const index = ({children}) => {
    return (
        <section className="pt-[42px]">
            <div className="flex flex-col gap-y-10">
                <nav className="text-[#C2CAD1] text-[14px] font-semibold flex items-center gap-x-6">
                    <li>
                        <Link className="flex items-center gap-x-1" href="/overview"> <Overview/> Overview</Link>
                    </li>
                    <li><Link className="flex items-center gap-x-1" href="/repositories"> <Repository/> Repositories</Link></li>
                    <li><Link className="flex items-center gap-x-1" href="/projects"> <Project/> Projects</Link></li>
                    <li><Link className="flex items-center gap-x-1" href="/packages"> <Package/> Packages</Link></li>
                    <li><Link className="flex items-center gap-x-1" href="/stars"> <Star/> Stars</Link></li>
                </nav>

                <div>
                    {children}
                </div>
            </div>       
        </section>
    );
};

export default index;