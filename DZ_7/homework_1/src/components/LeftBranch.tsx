// Імпортуємо дочірній компонент LeftBranchA
import {LeftBranchA} from "./LeftBranchA.tsx";

// Імпортуємо хук useMemo з React
// Він потрібен для кешування результатів обчислень
import {useMemo} from "react";

// Створюємо компонент LeftBranch
export const LeftBranch = () => {
    // Використовуємо useMemo, щоб виконати важкі обчислення лише один раз
    const memox = useMemo(() => {
        // Цикл від 0 до 999 – просто виводить числа у консоль
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        // Повертаємо null (тут результат не використовується)
        return null;
    }, []); // [] означає: виконати цей код лише при першому рендері

    // Те, що бачить користувач
    return (
        <div>
            LeftBranch
            {/* Вставляємо дочірній компонент LeftBranchA */}
            <LeftBranchA/>
        </div>
    );
};
