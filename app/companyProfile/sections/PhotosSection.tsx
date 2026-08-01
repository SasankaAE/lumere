"use client";

import React, { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { C, photos, SectionLabel } from "../lib/shared";

interface PhotosSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

const ITEMS_PER_PAGE = 6;

export default function PhotosSection({ setRef }: PhotosSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPhotos = photos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section id="photos" data-section-id="photos" ref={setRef}>
      <SectionLabel id="SEC-05" title="Photos" icon={ImageIcon} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedPhotos.map((p) => (
          <Card
            key={p.img}
            style={{ background: C.panel, border: `1px solid ${C.line}`, overflow: "hidden" }}
            className="group"
          >
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src={p.img}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-3 py-2 text-xs"
                style={{ background: "linear-gradient(transparent, #3A3350E6)", color: C.panel }}
              >
              </div>
            </div>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(currentPage - 1);
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}