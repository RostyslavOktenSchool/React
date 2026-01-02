// Імпортуємо дочірній компонент RightBranchA
import {RightBranchA} from "./RightBranchA.tsx";

// Створюємо компонент RightBranch
export const RightBranch = () => {
    return (
        <div>
            {/* Текст, який показує назву гілки */}
            RightBranch

            {/* Вставляємо дочірній компонент RightBranchA всередині абзацу */}
            <p>
                <RightBranchA/>
            </p>
        </div>
    );
};