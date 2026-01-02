// Імпортуємо наш компонент UserComponent
import {UserComponent} from "./UserComponent.tsx";

// Імпортуємо хуки useCallback та useMemo з React
// useMemo – для кешування значень
// useCallback – для кешування функцій
import {useCallback, useMemo} from "react";

// Імпортуємо власний хук useFetch (ймовірно, він тягне дані з API)
import {useFetch} from "../hooks/useFetch.tsx";

// Створюємо компонент UsersComponent
export const UsersComponent = () => {
    // Кожен рендер буде писати "users" у консоль
    console.log('users');

    // Викликаємо наш хук useFetch – отримуємо масив користувачів
    const users = useFetch();

    // Використовуємо useMemo, щоб створити масив лише один раз
    // Якщо не використати useMemo, масив буде створюватись заново при кожному рендері
    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []); // [] означає: створити масив тільки при першому рендері

    // Використовуємо useCallback, щоб функція foo не створювалась заново при кожному рендері
    // Це важливо, бо ми передаємо її в дочірній компонент, який обгорнутий у memo
    const foo = useCallback(() => {
        console.log('test');
    }, []); // [] означає: створити функцію лише один раз

    // Те, що бачить користувач
    return (
        <div>
            users component
            {
                // Перебираємо масив users і для кожного елемента рендеримо UserComponent
                // Передаємо три пропси: item (сам користувач), foo (функція), arr (масив)
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }
        </div>
    );
};
