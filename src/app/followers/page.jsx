"use client";

import { useEffect, useState } from "react";
import useUsersApi from "@/service/Users";
import UserItem from "../../components/UI/UserList/UserItem";



const page = () => {
    const [followers, setFollowers] = useState([]);
    const [step, setStep] = useState(1);
    const [pbtn, psetBtn] = useState(false);
    const [nbtn, nsetBtn] = useState(false);
    useEffect(() => {
        if(step <= 1){
            psetBtn(true);
        }
        useUsersApi.paginateFollowers().then((res) => {
            if(res.status == 200){
                setFollowers(res.data)
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
        <div className="">
            <ul>
                
                    {
                        followers?.length ? followers?.map((user) => {
                            return <li>
                                 <UserItem user={user}/>
                            </li>
                        }): <h1>Not Found!</h1>
                    }
                  
               
            </ul>

            <div className="flex justify-center gap-x-4">
                <button disabled={pbtn} className="border border-gray-700 p-2 px-4" onClick={() => prev()}>prev</button>
                <button disabled={nbtn} className="border border-gray-700 p-2 px-4" onClick={() => next()}>next</button>
            </div>
        </div>
    );
};

export default page;