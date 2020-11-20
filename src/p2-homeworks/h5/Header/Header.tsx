import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../Routes";
import s from "./Header.module.css";

function Header() {
    const [closed, setOpened] = useState<boolean>(true);

    const onClickHandler = () => {
        setOpened(!closed);
    }

    return (
        <div className={`${s.header} ${closed ? s.closed : ""}`}>
            <button onClick={onClickHandler} className={`${s.header_toggle} ${closed ? "" : s.opened}`}>
                <i className="fas fa-chevron-right"></i>
            </button>
            <nav className={s.navigation}>
                <ul className={s.links}>
                    <li>
                        <NavLink
                            to={PATH.PRE_JUNIOR}
                            activeClassName={s.active}
                            className={s.link}>
                            Pre Junior   <i className="fas fa-baby"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={PATH.JUNIOR}
                            activeClassName={s.active}
                            className={s.link}>
                            Junior   <i className="fas fa-child"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={PATH.STRONG_JUNIOR}
                            activeClassName={s.active}
                            className={s.link}>
                            Strong Junior   <i className="fas fa-male"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
