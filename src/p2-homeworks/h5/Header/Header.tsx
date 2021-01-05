import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStoreType } from "../../h10/bll/store";
import { PATH } from "../Routes";
import stheme from "./../../h12/HW12.module.css";
import s from "./Header.module.css";

function Header() {
    const [closed, setOpened] = useState<boolean>(true);

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);

    const onClickHandler = () => {
        setOpened(!closed);
    }

    return (
        <div className={`${s.header} ${stheme[theme]} ${closed ? s.closed : ""}`}>
            <button onClick={onClickHandler} className={`${s.header_toggle} ${stheme[theme + "-borders"]} ${closed ? "" : s.opened}`}>
                <i className="fas fa-chevron-right"></i>
            </button>
            <nav className={s.navigation}>
                <ul className={s.links}>
                    <li>
                        <NavLink
                            to={PATH.PRE_JUNIOR}
                            activeClassName={s.active}
                            className={`${s.link} ${stheme[theme + "-text"]}`}>
                            Pre Junior   <i className="fas fa-baby"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={PATH.JUNIOR}
                            activeClassName={s.active}
                            className={`${s.link} ${stheme[theme + "-text"]}`}>
                            Junior   <i className="fas fa-child"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={PATH.STRONG_JUNIOR}
                            activeClassName={s.active}
                            className={`${s.link} ${stheme[theme + "-text"]}`}>
                            Strong Junior   <i className="fas fa-male"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
