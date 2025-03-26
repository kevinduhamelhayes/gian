"use client";

import { useQuery } from "@tanstack/react-query";
import { wisp } from "@/lib/wisp";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

interface CommentSectionProps {
  slug: string;
}

export const CommentSection = () => {
  return (
    <div className="mt-16 border-t-2 border-bronze-200 pt-8">
      <h2 className="text-3xl font-script text-bronze-700 mb-8">Comparte tus pensamientos</h2>
      <div className="bg-bronze-50 p-6 rounded-lg border-2 border-bronze-300">
        <p className="text-bronze-800 text-center italic">
          Esta sección está en desarrollo. Pronto podrás compartir tus comentarios y pensamientos sobre este post.
        </p>
      </div>
    </div>
  );
};
