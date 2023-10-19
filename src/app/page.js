import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "@/components/Icons";

import contribution from "../assets/images/contributions.png";

const page = () => {
  return (
    <div className="flex flex-col">
        <h1 className="text-center text-white text-4xl my-5"> I'm a frontend developer </h1>  

        <div className="my-5"> 
        
            <h2 className="text-center text-white text-xl mb-4"> Follow me !</h2>

            <div className="flex items-center justify-center gap-x-5 cursor-pointer mb-20"> 
              <Facebook/>
              <Twitter/>
              <Linkedin/>
            </div>


            <h4 className="text-center text-white text-xl mb-5"> 
              My contributions
            </h4>

            <Image src={contribution} alt="github" loading="lazy"/>
        </div>
    </div>
  );
};

export default page;