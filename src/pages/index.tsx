import Head from 'next/head';
import React, { useState } from 'react';
import { useTVControls } from '~hooks/useTVControls';
import styles from "~shared/styles/Home.module.scss";

const navOptions = ["active", "archive"] as const;
type View = typeof navOptions[number];

export default function Home() {
  const [view, setView] = useState<View>("active");
  const [focusedNavIndex, setFocusedNavIndex] = useState(0);
  const [hovered, setHovered] = useState<number>(0);
  const [focusLayer, setFocusLayer] = useState<"nav" | "grid">("grid");

  const items = new Array(9).fill(null);
  const itemsPerRow = 3;

  useTVControls({
    onRight: () => {
      if (focusLayer === "nav") {
        setFocusedNavIndex((prev) => Math.min(prev + 1, navOptions.length - 1));
      } else {
        setHovered((prev) => Math.min(prev + 1, items.length - 1));
      }
    },
    onLeft: () => {
      if (focusLayer === "nav") {
        setFocusedNavIndex((prev) => Math.max(prev - 1, 0));
      } else {
        setHovered((prev) => Math.max(prev - 1, 0));
      }
    },
    onDown: () => {
      if (focusLayer === "nav") {
        setFocusLayer("grid");
      } else {
        setHovered((prev) => Math.min(prev + itemsPerRow, items.length - 1));
      }
    },
    onUp: () => {
      if (focusLayer === "grid" && hovered < itemsPerRow) {
        setFocusLayer("nav");
      } else if (focusLayer === "grid") {
        setHovered((prev) => Math.max(prev - itemsPerRow, 0));
      }
    },
    onSelect: () => {
      if (focusLayer === "nav") {
        setView(navOptions[focusedNavIndex]);
      } else {
        console.log("SELECTED ITEM:", hovered);
      }
    },
    onBack: () => {
      setFocusLayer("nav");
    }
  });

  return (
    <div className={styles.container}>
      <Head><title>tvOS test</title></Head>

      <div className={styles.nav}>
        {navOptions.map((label, index) => (
          <button
            key={label}
            onClick={() => setView(label)}
            className={styles.option}
            data-active={view === label}
            data-hovered={focusLayer === "nav" && focusedNavIndex === index}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.wrap}>
          {items.map((_, index) => (
            <div
              key={index}
              className={styles.item}
              data-hovered={focusLayer === "grid" && hovered === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}