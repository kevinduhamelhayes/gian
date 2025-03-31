import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { sendGAEvent } from "@/lib/ga-utils";
import { useAuth } from "@/lib/auth-context";

export const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // When the component mounts on the client, update the state to indicate it is mounted
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Enviar evento GA
    const isUser1 = user?.id === process.env.NEXT_PUBLIC_USER1_USERNAME?.toLowerCase();
    const userType = user ? (isUser1 ? 'usuario_1' : 'usuario_2') : undefined;
    const userName = user ? (isUser1 ? process.env.NEXT_PUBLIC_USER1_NAME : process.env.NEXT_PUBLIC_USER2_NAME) : undefined;

    sendGAEvent('theme_toggle', {
      selected_theme: newTheme,
      ...(user && { user_type: userType, user_name: userName })
    });
  };

  // Render nothing on the server
  if (!mounted) return null;

  // Once the component has mounted, we can safely render
  return (
    <Button 
      variant="ghost" 
      onClick={toggleDarkMode} 
      className="p-2 text-bronze-600 hover:text-bronze-800 hover:bg-bronze-100 dark:hover:bg-bronze-800"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
};
