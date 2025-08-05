import { Link, NavLink, useLocation } from "react-router-dom";

import { sidebarLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Loader from "../Loader/loader";
import { useState, useEffect } from "react";

const LeftSidebar = () => {
    // const navigate = useNavigate();
    const { pathname } = useLocation();
    // const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();

    // const { mutate: signOut } = useSignOutAccount();

    // const handleSignOut = async (
    //     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    // ) => {
    //     e.preventDefault();
    //     signOut();
    //     setIsAuthenticated(false);
    //     setUser(INITIAL_USER);
    //     navigate("/sign-in");
    // };

    return (
        <nav className="leftsidebar">
            <div className="flex flex-col gap-11 ml-5">
                <Link to="/" className="flex gap-3 items-center">
                    <img
                        src="/assets/images/logo.svg"
                        alt="logo"
                        width={170}
                        height={36}
                    />
                </Link>

                {/* {(() => {
                    const [loading, setLoading] = useState(true);
                    useEffect(() => {
                        const timeout = setTimeout(() => setLoading(false), 1500);
                        return () => clearTimeout(timeout);
                    }, []);
                    return loading ? (
                        <div className="h-14">
                            <Loader />
                        </div>
                    ) : ( */}
                <Link to={`/profile/bikash-pandey`} className="flex gap-3 items-center">
                    <img
                        src={"/assets/icons/profile-placeholder.svg"}
                        alt="profile"
                        className="h-14 w-14 rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="body-bold">Bikash Pandey</p>
                        <p className="small-regular text-light-3">@bikashpandey</p>
                    </div>
                </Link>
                {/* );
                })()} */}

                <ul className="flex flex-col gap-6">
                    {sidebarLinks.map((link: any) => {
                        const isActive = pathname === link.route;

                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${isActive && "bg-primary-500"
                                    }`}>
                                <NavLink
                                    to={link.route}
                                    className="flex gap-4 items-center p-4">
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white ${isActive && "invert-white"
                                            }`}
                                    />
                                    {link.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <Button
                variant="ghost"
                className="shad-button_ghost"
            // onClick={(e) => handleSignOut(e)}
            >
                <img src="/assets/icons/logout.svg" alt="logout" />
                <p className="small-medium lg:base-medium">Logout</p>
            </Button>
        </nav>
    );
};

export default LeftSidebar;
