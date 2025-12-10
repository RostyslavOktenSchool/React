import type { IUser } from "../model/IUser";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const USERS_PER_PAGE = 5;

export const userService = {
  async getUsers(): Promise<IUser[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },

  async getUserById(id: number): Promise<IUser> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  },
};

export const fetchUsers = async (currentPage: number) => {
  const skip = (currentPage - 1) * USERS_PER_PAGE;
  const response = await fetch(
    `https://dummyjson.com/users?limit=${USERS_PER_PAGE}&skip=${skip}`
  );
  const data = await response.json();
  return { users: data.users, total: data.total };
};