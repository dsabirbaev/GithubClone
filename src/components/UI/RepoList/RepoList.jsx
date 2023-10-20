
import { Star } from "../../Icons";


const RepoList = ({ repo: { name, svn_url,  description, language, stargazers_count, updated_at }, status }) => {
    return (
        <div className="flex justify-between items-center text-white py-5 border-t border-[#768390] text-[12px] text-[#768390] font-medium">
            <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-2">
                    <a href={svn_url} className="text-[#539BF5] text-[20px] font-semibold">{name}</a>
                    <span className="px-[7px]  border border-gray-400 rounded-full flex items-center justify-center">
                        {
                            status ? "Private" : "Public"
                        }

                    </span>
                </div>
                <p className="text-[14px]">{description}</p>
                <ul className="flex items-center gap-x-4">
                    <li className="flex items-center gap-x-1">
                        <span className="w-[12px] h-[12px] rounded-full bg-[#563D7C] block"></span> {language}
                    </li>
                    <li className="flex items-center gap-x-1">
                        <Star /> {stargazers_count}
                    </li>
                    <li className="flex items-center gap-x-1">
                        <span>Updated on</span> {new Date(updated_at).toLocaleString('en-US', { month: 'long' })} {new Date(updated_at).getDate()}
                    </li>
                </ul>

            </div>

            <div className="text-white flex items-center gap-x-2 border border-[#768390] rounded-md px-4 py-2 cursor-pointer">
                <Star /> <span>Starred</span>
            </div>
        </div>
    );
};

export default RepoList;