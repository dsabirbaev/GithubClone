"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useUsersApi from "../../service/Users";
import { Home, User, Map, Web } from "../Icons";
import img1 from "../../assets/images/quickdraw.png";
import img2 from "../../assets/images/pullshark.png";

const Index = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        useUsersApi.getProfile().then((res) => {
            setUser(res.data)
           
        })
    }, [])

    return (
        <aside className="min-w-[296px]">
            <div className="flex flex-col gap-y-[18px]">

                <div className="relative">
                    <img
                        src={user?.avatar_url}
                        alt="Avatar"
                        loading="lazy"
                        className="w-[296px] h-[296px] rounded-full "
                    />
                    <span className="absolute bottom-[35px] right-[0px] w-[38px] bg-black h-[38px] rounded-full flex items-center justify-center border border-gray-400"><Home /></span>
                </div>
              

                <div>
                    <h2 className="text-[#C2CAD1] text-[24px] font-semibold">{user?.name}</h2>
                    <p className="text-[20px] tracking-[-0.4px] text-[#6E7681]">{user?.login}</p>
                </div>

                <button className="text-[#C2CAD1] rounded-[5px] bg-[#21262D] text-[14px] font-bold h-[32px]">Edit profile</button>

                <p className="text-[#C2CAD1] text-[16px] ">{user?.bio}</p>

                <div className="flex items-center text-[#C2CAD1] font-semibold text-[14px]">
                    <User /> 
                    <Link href="/followers"> <span className="mx-2 hover:text-blue-400">{user?.followers} followers</span></Link>
                    <Link href="/followings"> <span className="hover:text-blue-400">{user?.following} following</span></Link>   
                    
                </div>
                <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
                    <Map /> <span className="ml-1">{user?.location}</span>
                </div>

                <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
                    <Web /> <span className="ml-1">davran.com</span>
                </div>
                <span className="w-full h-[1px] bg-[#282C31]"></span>

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

                <div className="flex items-center gap-x-1">
                    <span className="text-[#26A641] tracking-[0.39px] text-[13px] rounded-[50px] border border-[#26A641] px-[8px] py-[1px]">Beta</span>
                    <span className="text-[#58A6FF] tracking-[0.26px] text-[13px] font-semibold">Send feedback</span>
                </div>

                <p className="text-[#6E7681] ">Block or Report</p>
            </div>
        </aside>
    );
};

export default Index;