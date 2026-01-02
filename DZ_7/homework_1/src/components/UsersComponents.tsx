// Імпортуємо наш дочірній компонент UserComponent
import {UserComponent} from "./UserComponent.tsx";

// Імпортуємо хуки з React
// useCallback – щоб функція не створювалась заново при кожному рендері
// useEffect – для побічних ефектів (наприклад, запитів)
// useState – для збереження стану (масив користувачів)
import {useCallback, useEffect, useState} from "react";

// Створюємо компонент UsersComponent
export const UsersComponent = () => {
    // Кожен рендер цього компонента буде писати "users" у консоль
    console.log('users');

    // Створюємо стан users, початково пустий масив
    const [users, setUsers] = useState([]);

    // Використовуємо useCallback, щоб функція foo була стабільною
    // і не створювалась заново при кожному рендері
    const foo = useCallback(() => {
        console.log('test');
    }, []); // [] означає: створити функцію лише один раз

    // Використовуємо useEffect – виконається після першого рендеру
    useEffect(() => {
        // Робимо запит на API, щоб отримати список користувачів
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json()) // перетворюємо відповідь у JSON
            .then(value => {
                // зберігаємо отриманих користувачів у стан
                setUsers(value);
            });

        // Функція очистки (cleanup) – виконається при розмонтуванні компонента
        return () => {
            console.log('unsubscribe');
        }

    }, []); // [] означає: ефект виконається лише один раз при першому рендері

    // Те, що бачить користувач
    return (
        <div>
            users component
            {/* Викликаємо дочірній компонент і передаємо йому пропс foo */}
            <UserComponent foo={foo}/>
        </div>
    );
};
