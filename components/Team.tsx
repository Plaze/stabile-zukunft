"use client";

import { useState } from "react";
import { team } from "@/lib/team";

export default function Team() {
  const [openSet, setOpenSet] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenSet((s) => ({ ...s, [key]: !s[key] }));

  return (
    <section id="team" className="section">
      <div className="container-wide">
        <div className="kicker" style={{ marginBottom: 14 }}>
          Stabile Zukunft
        </div>
        <h2 className="h2" style={{ marginBottom: 48 }}>
          Das Team
        </h2>
        <div className="team-grid">
          {team.map((m) => {
            const isOpen = !!openSet[m.key];
            const showToggle = m.bio.length > 180;
            return (
              <div key={m.key} className="tcard">
                <div className="tcard-img-wrap">
                  <img className="tcard-img" src={m.img} alt={m.name} />
                </div>
                <div className="tcard-body">
                  <div className="tcard-name">{m.name}</div>
                  <div className="tcard-role">{m.role}</div>
                  <div className={isOpen ? "bio open" : "bio"}>{m.bio}</div>
                  {showToggle && (
                    <button
                      className="bio-toggle"
                      onClick={() => toggle(m.key)}
                    >
                      {isOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
