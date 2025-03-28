"use client";
import { config } from "@/config";
import { Heart, Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-12 md:mt-20 mb-16 border-t border-bronze-300 pt-8">
      <div className="flex items-center justify-between">
        <div className="text-base md:text-lg text-bronze-700 font-handwritten">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-sm text-bronze-600 hidden lg:block font-handwritten">
          <span className="flex items-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para {config.blog.name}
          </span>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
      <div className="text-sm text-bronze-600 lg:hidden font-handwritten mt-4 text-center">
        <span className="flex items-center justify-center gap-2">
          Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para {config.blog.name}
        </span>
      </div>
    </section>
  );
};
