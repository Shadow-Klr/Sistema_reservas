"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, Calendar, User, UserPlus } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg" /> {/* Placeholder para tu logo */}
        SyncSpace
      </Link>

      {/* Menú Desktop */}
      <div className="hidden md:flex gap-4 items-center">
        <Link href="/login" className="text-sm font-medium">Login</Link>
        <Link href="/register" className="text-sm font-medium">Registro</Link>
        <Button asChild variant="default">
          <Link href="/booking" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Agendar
          </Link>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>

      {/* Menú Mobile */}
      <div className="md:hidden flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="mb-6">Menú SyncSpace</SheetTitle>
            <div className="flex flex-col gap-4">
              <Link href="/login" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
                <User className="w-4 h-4" /> Login
              </Link>
              <Link href="/register" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
                <UserPlus className="w-4 h-4" /> Registro
              </Link>
              <Link href="/booking" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
                <Calendar className="w-4 h-4" /> Agendar Cita
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}