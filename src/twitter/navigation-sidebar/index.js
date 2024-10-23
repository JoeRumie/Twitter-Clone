import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const links = ['home', 'explore', 'notifications', 'messages', 'bookmarks', 'Lists', 'Profile', 'more']
    const [ignore, twitter, active] = pathname.split("/");
    return (
        <div className='list-group'>
            {links.map((link) => 
                <Link to={`/twitter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    {link}
                </Link>
            )}
        </div>
    )
};

