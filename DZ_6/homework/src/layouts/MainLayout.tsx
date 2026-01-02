// Він показує дочірні сторінки (тобто контент залежно від маршруту)
import {Outlet} from "react-router-dom";

// Імпортуємо наше меню з іншого файлу
import Menu from "../components/menu/Menu.tsx";

// Створюємо головний макет (layout) для сайту
export const MainLayout = () => {
    return (
        <>
            {/* Вставляємо меню, щоб воно завжди було зверху */}
            <Menu/>
            
            {/* Outlet показує ту сторінку, яка відповідає поточному маршруту */}
            <Outlet/>
        </>
    );
};
