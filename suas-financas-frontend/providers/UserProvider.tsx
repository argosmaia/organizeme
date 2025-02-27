import React from "react";
import { useEffect, useState } from "react";
import { User } from "../types/interfaces/User";
import { UserContext } from "../context/UserContext";
import { api } from "../api/api";

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    const fetchUser = async () => {
      try {
        const response = await api.get("/users");
        setUser(response.data[0]); // Pegando o primeiro usuário para simulação
      } catch (error) {
        console.error("Erro ao buscar usuário", error);
      }
    };
  
    useEffect(() => {
      fetchUser();
    }, []);
  
    return <UserContext.Provider value={{ user, fetchUser }}>{children}</UserContext.Provider>;
  };