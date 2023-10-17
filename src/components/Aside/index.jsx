import Image from "next/image";

import { Home, User, Map, Web } from "../Icons";
import img1 from "../../assets/images/quickdraw.png";
import img2 from "../../assets/images/pullshark.png";
const index = () => {
    return (
        <aside className="pt-[42px] w-[296px]">
            <div className="flex flex-col gap-y-[18px]">

                <div className="w-[296px] h-[296px] bg-slate-500 rounded-full relative">
                    <span className="absolute bottom-[35px] right-[0px] w-[38px] bg-black h-[38px] rounded-full flex items-center justify-center border border-gray-400"><Home /></span>
                </div>

                <div>
                    <h2 className="text-[#C2CAD1] text-[24px] font-semibold">Sabirbayev Davranbek</h2>
                    <p className="text-[20px] tracking-[-0.4px] text-[#6E7681]">Frontend developer</p>
                </div>

                <button className="text-[#C2CAD1] rounded-[5px] bg-[#21262D] text-[14px] font-bold h-[32px]">Edit profile</button>

                <p className="text-[#C2CAD1] text-[16px] ">I'm a frontend developer and a year experience</p>

                <div className="flex items-center text-[#C2CAD1] font-semibold text-[14px]">
                    <User /> <span className="mx-2">100 000 followers</span> <span>1 following</span>
                </div>
                <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
                    <Map /> <span className="ml-1">Tashkent, Uzbekistan </span>
                </div>

                <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
                    <Web /> <span className="ml-1">davran.com</span>
                </div>
                <span className="w-full h-[1px] bg-[#C2CAD1]"></span>

                <div className="flex flex-col">
                    <p className="text-[#C2CAD1] text-[18px] font-semibold mb-[8px]">Achievements</p>
                    <div className="flex">
                        <Image
                            src={img1}
                            alt="Picture of the author"
                            loading="lazy"
                        />
                         <Image
                            src={img2}
                            alt="Picture of the author"
                            loading="lazy"
                        />
                     
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default index;