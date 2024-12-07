import { createContext, useContext, useState, ReactNode } from "react";

// Tipos para o contexto
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Criação do contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provedor do contexto
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // Atualiza o atributo do tema no `html`
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


// Hook para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
