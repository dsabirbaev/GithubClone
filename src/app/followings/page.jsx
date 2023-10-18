"use client";

import { useEffect, useState } from "react";
import useUsersApi from "@/service/Users";
import UserItem from "../../components/UI/UserList/UserItem";



const Page = () => {
    const [followings, setFollowings] = useState([]);
    const [step, setStep] = useState(1);
    const [pbtn, psetBtn] = useState(false);
    const [nbtn, nsetBtn] = useState(false);
    useEffect(() => {
        if(step <= 1){
            psetBtn(true);
        }
        useUsersApi.paginateFollowings().then((res) => {
            if(res.status == 200){
                setFollowings(res.data)
                nsetBtn(false);
            }
          
        })
    }, [step])

    const next = () => {
        setStep(step+1);
        nsetBtn(true);
    }

    const prev = () => {
        setStep(step-1);
        psetBtn(true);
    }



    return (
        <div>
            <ul>
                
                    {
                        followings?.length ? followings?.map((user) => {
                            return <li key={user?.id}>
                                 <UserItem user={user}/>
                            </li>
                        }): <h1>Not Found!</h1>
                    }
                  
               
            </ul>

            <div className="flex justify-center gap-x-4 mt-5 text-white">
                <button disabled={pbtn} className="border border-gray-700 p-2 px-4" onClick={() => prev()}>prev</button>
                <button disabled={nbtn} className="border border-gray-700 p-2 px-4" onClick={() => next()}>next</button>
            </div>
        </div>
    );
};

export default Page;