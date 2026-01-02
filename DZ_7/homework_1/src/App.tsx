import './App.css';

// Імпортуємо компоненти LeftBranch та RightBranch
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";

// Імпортуємо наш контекст
import {MyContext} from "./contetx/MyContext.tsx";

// Імпортуємо хук useState з React
import {useState} from "react";

// Головний компонент App
function App() {

    // Створюємо стан counter з початковим значенням 0
    // setCounter – функція для оновлення цього стану
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            {/* Обгортаємо дочірні компоненти у MyContext.Provider */}
            {/* Це дозволяє передати глобальні значення counterValue та increment */}
            <MyContext.Provider value={{
                counterValue: counter, // поточне значення лічильника
                increment: (obj) => {  // функція для збільшення лічильника
                    setCounter(++obj); // збільшуємо значення на 1
                }
            }}>
                {/* Вставляємо дві гілки */}
                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>
        </>
    );
}


export default App;
