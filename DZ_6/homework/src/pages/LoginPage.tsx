// Підтягуємо хук useEffect з React
import {useEffect} from "react";

// Імпортуємо функцію login з нашого api.service.ts
// Вона відповідає за авторизацію користувача
import {login} from "../services/api.service.ts";

// Створюємо компонент LoginPage
export const LoginPage = () => {
    // Використовуємо useEffect – цей код виконається один раз після завантаження сторінки
    useEffect(() => {
        // Викликаємо функцію login з тестовими даними користувача
        login({
            username: 'emilys',      // ім'я користувача
            password: 'emilyspass',  // пароль
            expiresInMins: 1         // час життя токена (1 хвилина)
        });
    }, []); // [] означає, що ефект виконається лише один раз при першому рендері

    // Те, що бачить користувач на сторінці
    return (
        <>
            {/* Простий текст, який показує назву сторінки */}
            login Page
        </>
    );
};
