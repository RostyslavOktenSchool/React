// Імпортуємо наш компонент UserComponent
import { UserComponent } from "./UserComponent.tsx";

// Імпортуємо хуки useCallback та useMemo з React
import { useCallback, useMemo } from "react";

// Імпортуємо власний хук useFetch (тепер він приймає endpoint)
import { useFetch } from "../hooks/useFetch.tsx";

// Створюємо компонент UsersComponent
export const UsersComponent = () => {
  console.log("users");

  // Викликаємо наш хук useFetch з ендпоінтом
  const { data: users, loading, error } = useFetch<any[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Масив створюється лише один раз
  const arr: number[] = useMemo(() => [11, 22, 33], []);

  // Функція foo створюється лише один раз
  const foo = useCallback(() => {
    console.log("test");
  }, []);

  // Те, що бачить користувач
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      users component
      {users?.map((value) => (
        <UserComponent key={value.id} item={value} foo={foo} arr={arr} />
      ))}
    </div>
  );
};
