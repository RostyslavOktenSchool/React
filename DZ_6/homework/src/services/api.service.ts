// Підтягуємо бібліотеку axios для роботи з HTTP-запитами
import axios from 'axios';

// Імпортуємо типи для користувача з токенами, продуктів та інших моделей
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

// Описуємо тип даних для логіну
type LoginData = {
    username: string;      // ім'я користувача
    password: string;      // пароль
    expiresInMins: number; // час життя токена
}

// Створюємо екземпляр axios з базовим URL
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

// Додаємо перехоплювач запитів
axiosInstance.interceptors.request.use((requestObject) => {
    // Якщо метод GET – додаємо заголовок авторизації з токеном
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;
})

// Функція логіну
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    // Відправляємо POST-запит на /login з даними користувача
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens); // показуємо результат у консолі
    localStorage.setItem('user', JSON.stringify(userWithTokens)); // зберігаємо користувача з токенами в localStorage
    return userWithTokens; // повертаємо результат
}

// Функція для завантаження продуктів (ресурсів)
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // GET-запит на /products
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products; // повертаємо масив продуктів
}

// Функція для оновлення токенів
export const refresh = async () => {
    // Беремо користувача з localStorage
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    // Відправляємо POST-запит на /refresh з refreshToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    // Оновлюємо токени у користувача
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    // Перезаписуємо користувача в localStorage
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}
