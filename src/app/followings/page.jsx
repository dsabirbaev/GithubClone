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
        if (step <= 1) {
            psetBtn(true);
        } else {
            psetBtn(false);
        }
        useUsersApi.paginateFollowings(step).then((res) => {
            if(res.status == 200){
                setFollowings(res.data)
                nsetBtn(false);
            }
          
        })
    }, [step])

    const next = () => {
        if (repository.length < 30) {
            nsetBtn(false);
        } else {
            setStep(step + 1);
            psetBtn(false);
        }
    }

    const prev = () => {
        setStep(step - 1);
        nsetBtn(false);
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
                {
                    followings.length < 30 ? null :
                        <>
                            <button disabled={pbtn} className={`${pbtn ? "bg-black cursor-not-allowed" : "bg-transparent"} border border-gray-700 p-2 px-4`} onClick={() => prev()}>prev</button>
                            <button disabled={nbtn} className={`${followings.length < 30 ? "bg-black cursor-not-allowed" : "bg-transparent"} border border-gray-700 p-2 px-4`} onClick={() => next()}>next</button>
                        </>

                }

            </div>
        </div>
    );
};

export default Page;