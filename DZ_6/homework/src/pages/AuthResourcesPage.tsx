// Підтягуємо хук useEffect з React
import {useEffect} from "react";

// Імпортуємо дві функції з нашого api.service.ts
// loadAuthProducts – завантажує продукти (ресурси)
// refresh – оновлює токен чи авторизацію, якщо щось пішло не так
import {loadAuthProducts, refresh} from "../services/api.service.ts";

// Створюємо компонент сторінки AuthResourcesPage
export const AuthResourcesPage = () => {

    // Використовуємо useEffect – код всередині виконається один раз після завантаження сторінки
    useEffect(() => {
        // Викликаємо функцію, яка завантажує продукти
        loadAuthProducts()
            .then(products => {
                // Якщо все ок – виводимо продукти в консоль
                console.log(products)
            })
            .catch(reason => {
                // Якщо помилка – показуємо її в консолі
                console.log(reason);
                // Потім пробуємо оновити авторизацію
                refresh()
                    // Після оновлення знову пробуємо завантажити продукти
                    .then(() => loadAuthProducts())
                    // І виводимо їх у консоль
                    .then(value => console.log(value))
            })

    }, []); // [] означає, що цей код виконається лише один раз при першому рендері

    // Те, що бачить користувач на сторінці
    return (
        <>
            AuthResourcesPage
        </>
    );
};