// Імпортуємо хук useContext з React
import {useContext} from "react";

// Імпортуємо наш контекст MyContext
import {MyContext} from "../contetx/MyContext.tsx";

// Створюємо компонент LeftBranchA
export const LeftBranchA = () => {
    // Використовуємо useContext, щоб дістати значення з MyContext
    // Тут ми витягуємо counterValue (наприклад, лічильник)
    const {counterValue} = useContext(MyContext);

    // Те, що бачить користувач
    return (
        <div>
            Left Branch A

            {/* Виводимо поточне значення лічильника з контексту */}
            <p>
                current counter value is = {counterValue}
            </p>
        </div>
    );
};