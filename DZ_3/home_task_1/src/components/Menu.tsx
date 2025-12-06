import {Link} from "react-router-dom";
import  { RoutePaths } from "../models/RoutePaths";
import type { FC } from "react";

const Menu: FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to={RoutePaths.USERS_JSON}>Users JSONPlaceholder</Link></li>
                <li><Link to={RoutePaths.USERS_DUMMY}>Users DummyJSON</Link></li>
                <li><Link to={RoutePaths.POSTS_JSON}>Posts JSONPlaceholder</Link></li>
                <li><Link to={RoutePaths.POSTS_DUMMY}>Posts DummyJSON</Link></li>
                <li><Link to={RoutePaths.COMMENTS_JSON}>Comments JSONPlaceholder</Link></li>

            </ul>
        </nav>
    )
}
export default Menu;