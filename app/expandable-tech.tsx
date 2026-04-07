"use client";

import { useState } from "react";

export default function ExpandableTech({
  tech,
  limit = 15,
}: {
  tech: string[];
  limit?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? tech : tech.slice(0, limit);
  const hasMore = tech.length > limit;

  return (
    <div className="card-tech">
      {visible.map((t) => (
        <span key={t}>{t}</span>
      ))}
      {hasMore && !expanded && (
        <button
          className="tech-more"
          onClick={(e) => {
            e.preventDefault();
            setExpanded(true);
          }}
        >
          More&hellip;
        </button>
      )}
    </div>
  );
}
