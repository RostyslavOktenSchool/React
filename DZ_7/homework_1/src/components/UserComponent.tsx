// Імпортуємо FC (тип для функціональних компонентів) і memo (обгортка для оптимізації)
import {FC, memo} from "react";

// Створюємо компонент UserComponent
// FC<{ ... }> означає, що ми описуємо пропси: 
// - foo: функція
// - arr: масив чисел
// - item: об'єкт з полем name
export const UserComponent: FC<{ foo: () => void, arr: number[], item: { name: string } }> = 
    // Обгортаємо компонент у memo
    // memo каже React: "Не перемальовуй цей компонент, якщо пропси не змінились"
    memo(({arr, item}) => {
        // Кожен раз, коли компонент рендериться, виводимо "user" у консоль
        console.log('user');
        // Виводимо масив arr у консоль
        console.log(arr);

        // Повертаємо розмітку: показуємо ім'я з об'єкта item
        return (
            <div>{item.name}</div>
        );
    });
