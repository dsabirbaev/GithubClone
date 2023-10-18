




const UserItem = ({user:{avatar_url, login, html_url}}) => {
    return (
        <div className="text-white">
            <div className="p-4 border-b border-gray-300 m-2 flex justify-between items-center">
                <a href={html_url} target="_blank" className="flex items-center gap-x-3 cursor-pointer">
                    <img src={avatar_url} className="w-[50px] h-[50px] rounded-full" alt="user avatar" />
                    <p>
                        {login}
                    </p>
                  
                </a>

                <button className="border p-2 px-4 duration rounded-lg hover:bg-slate-300">Follow</button>
            </div>
        </div>
    );
};

export default UserItem;