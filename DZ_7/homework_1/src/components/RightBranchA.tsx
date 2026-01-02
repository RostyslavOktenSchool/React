// Імпортуємо хук useContext з React
import {useContext} from "react";

// Імпортуємо наш контекст MyContext
import {MyContext} from "../contetx/MyContext.tsx";

// Створюємо компонент RightBranchA
export const RightBranchA = () => {

    // Використовуємо useContext, щоб отримати значення з MyContext
    // Тут ми дістаємо counterValue (поточне значення лічильника)
    // та функцію increment (яка збільшує лічильник)
    const {counterValue, increment} = useContext(MyContext);

    // Те, що бачить користувач
    return (
        <div>
            RightBranchA

            {/* Кнопка: при кліку викликає функцію increment і передає поточне значення лічильника */}
            <button onClick={() => {
                increment(counterValue);
            }}>
                click me to increment counter in LBA
            </button>
        </div>
    );
};