
import { Logo } from "../Icons";


const index = () => {
    return (
        <footer>
            <div className="px-5">
                <div className="flex items-center gap-x-[70px] h-[115px]">
                    <div className="flex items-center gap-x-[6px] tracking-[-0.24px]">
                        <Logo/> <span className="text-[#8B949E] font-semibold"> © 2023 GitHub, Inc.</span>
                    </div>

                    <ul className="flex items-center gap-x-[42px] text-[#58A6FF] text-[12px] font-semibold translate-x-[-0.24px]">
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Contact GitHub</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>  
        </footer>
    );
};

export default index;