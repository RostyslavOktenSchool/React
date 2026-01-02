// Підтягуємо функцію createBrowserRouter з react-router-dom
// Вона дозволяє створити маршрути для нашого застосунку
import {createBrowserRouter} from "react-router-dom";

// Імпортуємо головний макет (layout)
import {MainLayout} from "../layouts/MainLayout.tsx";

// Імпортуємо сторінки
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

// Створюємо маршрути для всього застосунку
export const routes = createBrowserRouter([
    {
        // Головний шлях (корінь сайту)
        path: '/', 
        // Використовуємо MainLayout як "рамку" для цих маршрутів
        element: <MainLayout/>, 
        // Вкладені маршрути (діти)
        children: [
            {
                // index: true означає, що це головна сторінка (HomePage)
                index: true, 
                element: <HomePage/>
            },
            {
                // Шлях /login відкриває сторінку входу
                path: 'login', 
                element: <LoginPage/>
            },
            {
                // Шлях /auth/resources відкриває сторінку ресурсів
                path: '/auth/resources', 
                element: <AuthResourcesPage/>
            },
        ]
    }
]);
