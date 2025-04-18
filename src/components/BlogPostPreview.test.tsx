import React from "react";
import { render, screen } from "@testing-library/react";
import { BlogPostsPreview } from "./BlogPostPreview";
import { LocalPost } from "@/lib/local-posts";

describe("BlogPostsPreview", () => {
  it("debe renderizar la imagen de preview del primer post", () => {
    const posts: LocalPost[] = [
      {
        id: "test-post",
        slug: "test-post",
        title: "Test Post",
        description: "Descripción de prueba",
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        image: "/images/test-image.jpg",
        carouselImages: [],
        tags: [],
        featured: true,
      },
    ];

    render(<BlogPostsPreview posts={posts} />);

    // Busca la imagen por alt (el título del post)
    const img = screen.getByAltText("Test Post");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/test-image.jpg");
  });
}); 