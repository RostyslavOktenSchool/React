// Функція для отримання даних з localStorage
// <T> означає, що ми можемо вказати будь-який тип, який очікуємо отримати
export const retriveLocalStorage = <T>(key: string) => {
    // Беремо значення з localStorage за ключем
    // Якщо нічого немає – повертаємо порожній рядок
    const object = localStorage.getItem(key) || '';

    // Якщо значення порожнє – повертаємо пустий об'єкт як тип T
    if (!object) {
        return {} as T;
    }

    // Якщо значення є – парсимо його з JSON (рядка → об'єкт)
    const parse = JSON.parse(object);

    // Повертаємо результат як тип T
    return parse as T;
}
