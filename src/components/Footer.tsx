"use client";
import { config } from "@/config";
import { Heart, Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12 border-t border-bronze-300 pt-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-bronze-600 font-handwritten">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-xs text-bronze-500 hidden lg:block font-handwritten">
          <span className="flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para {config.blog.name}
          </span>
        </div>
        <div>
        
          <DarkModeToggle />
        </div>
      </div>
      <div className="text-xs text-bronze-500 lg:hidden font-handwritten mt-3 text-center">
        <span className="flex items-center justify-center gap-1">
          Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para {config.blog.name}
        </span>
      </div>
    </section>
  );
};
