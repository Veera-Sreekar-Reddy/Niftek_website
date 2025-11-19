"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface ServiceCard {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink?: string;
  content: () => React.ReactNode;
}

interface ExpandableServiceCardProps {
  cards: ServiceCard[];
}

export default function ExpandableServiceCard({ cards }: ExpandableServiceCardProps) {
  const [active, setActive] = useState<ServiceCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-niftek-dark text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-niftek-dark/70 mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active.ctaLink && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-niftek-medium text-white hover:bg-niftek-dark transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-niftek-dark/80 text-sm md:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content()}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="h-64 bg-white rounded-lg shadow-md border border-niftek-light p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden group"
          >
            <div 
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
            >
              <img
                width={200}
                height={200}
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white/80 z-0"></div>

            <div className="relative z-10 text-center w-full">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-niftek-dark text-xl mb-2"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-niftek-dark/70 text-sm mb-4"
              >
                {card.description}
              </motion.p>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-niftek-light hover:bg-niftek-medium hover:text-white text-niftek-dark transition-colors"
              >
                {card.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

