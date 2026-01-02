// Імпортуємо функцію createContext з React
import {createContext} from "react";

// Описуємо тип для нашого контексту
// Він містить:
// - counterValue: число (значення лічильника)
// - increment: функція, яка приймає число і нічого не повертає (void)
type MyContextType = {
    counterValue: number;
    increment: (obj: number) => void;
};

// Створюємо початкове значення для контексту (init)
// Тут ми задаємо:
// - counterValue = 0 (початкове значення лічильника)
// - increment = функція, яка просто виводить число у консоль
export const init = {
    counterValue: 0,
    increment: (obj: number) => {
        console.log(obj);
    }
};

// Створюємо сам контекст MyContext
// createContext<MyContextType>(init) означає:
// - контекст буде мати тип MyContextType
// - початкове значення буде взяте з init
export const MyContext = createContext<MyContextType>(init);