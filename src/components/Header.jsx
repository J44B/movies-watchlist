export default function Header() {
    return (
        <div className="navbar bg-[#F0F0C9]">
            <div className="flex-1">
                <div className="flex flex-row justify-between">
                    <div className="w-10">
                        <img
                            alt="the wonderful watchlist"
                            src="src/assets/pictures/watchlist.png"
                        />
                    </div>
                    <a className="text-s p-2">powered by</a>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Profile"
                                src="src/assets/pictures/avatar-profile.png"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile (placeholder)
                                <span className="badge">New (placeholder)</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings (placeholder)</a>
                        </li>
                        <li>
                            <a>Logout (placeholder)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
