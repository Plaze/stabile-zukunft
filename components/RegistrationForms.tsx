"use client";

import { useState } from "react";

type Status = { msg: string; ok: boolean } | null;

const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function RegistrationForms() {
  const [coop, setCoop] = useState({
    gruppe: "",
    name: "",
    stadt: "",
    strasse: "",
    email: "",
    web: "",
    info: "",
    captcha: "",
    consent: false,
  });
  const [indiv, setIndiv] = useState({
    name: "",
    alter: "",
    email: "",
    eltern: "",
    captcha: "",
    consent: false,
  });
  const [coopStatus, setCoopStatus] = useState<Status>(null);
  const [indivStatus, setIndivStatus] = useState<Status>(null);

  const onCoop = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const t = e.target as HTMLInputElement;
    const v = t.type === "checkbox" ? t.checked : t.value;
    setCoop((s) => ({ ...s, [t.name]: v }));
  };
  const onIndiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target;
    const v = t.type === "checkbox" ? t.checked : t.value;
    setIndiv((s) => ({ ...s, [t.name]: v }));
  };

  const submitCoop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coop.name.trim()) return setCoopStatus({ msg: "Bitte gib den Namen des Verantwortlichen an.", ok: false });
    if (!emailRe.test(coop.email)) return setCoopStatus({ msg: "Bitte gib eine gültige E-Mail-Adresse ein.", ok: false });
    if (parseInt(coop.captcha, 10) !== 18) return setCoopStatus({ msg: "Bitte löse die Rechenaufgabe korrekt (29 − 11).", ok: false });
    if (!coop.consent) return setCoopStatus({ msg: "Bitte stimme der Datenschutzerklärung zu.", ok: false });
    const body = `Art der Gruppe: ${coop.gruppe}\nVerantwortliche/r: ${coop.name}\nStadt: ${coop.stadt}\nStraße: ${coop.strasse}\nE-Mail: ${coop.email}\nWebseite/Instagram: ${coop.web}\n\nInformation zur Gruppe:\n${coop.info}`;
    window.location.href = `mailto:stabilezukunft@gmail.com?subject=${encodeURIComponent("Kooperationsanfrage – Stabile Zukunft")}&body=${encodeURIComponent(body)}`;
    setCoopStatus({ msg: "Danke! Dein E-Mail-Programm öffnet sich – bitte sende die vorbereitete Nachricht ab.", ok: true });
  };

  const submitIndiv = (e: React.FormEvent) => {
    e.preventDefault();
    if (!indiv.name.trim()) return setIndivStatus({ msg: "Bitte gib deinen Namen an.", ok: false });
    if (!indiv.alter.trim()) return setIndivStatus({ msg: "Bitte gib dein Alter an.", ok: false });
    if (!emailRe.test(indiv.email)) return setIndivStatus({ msg: "Bitte gib eine gültige E-Mail-Adresse ein.", ok: false });
    if (parseInt(indiv.captcha, 10) !== 19) return setIndivStatus({ msg: "Bitte löse die Rechenaufgabe korrekt (24 − 5).", ok: false });
    if (!indiv.consent) return setIndivStatus({ msg: "Bitte stimme der Datenschutzerklärung zu.", ok: false });
    const body = `Name: ${indiv.name}\nAlter: ${indiv.alter}\nE-Mail: ${indiv.email}\nErziehungsberechtigte: ${indiv.eltern}`;
    window.location.href = `mailto:stabilezukunft@gmail.com?subject=${encodeURIComponent("Anmeldung Einzelperson – Stabile Zukunft")}&body=${encodeURIComponent(body)}`;
    setIndivStatus({ msg: "Danke! Dein E-Mail-Programm öffnet sich – bitte sende die vorbereitete Nachricht ab.", ok: true });
  };

  return (
    <section id="anmelden" className="section">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 14 }}>
          Anmeldung
        </div>
        <h2 className="h2" style={{ fontSize: 48, marginBottom: 44 }}>
          Jetzt anmelden
        </h2>
        <div className="forms-grid">
          {/* Kooperationspartner */}
          <form id="form-coop" className="form" onSubmit={submitCoop}>
            <h3>Kooperationspartner werden</h3>

            <label className="field-label">Art der Gruppe</label>
            <select className="field" name="gruppe" value={coop.gruppe} onChange={onCoop}>
              <option value="">Wähle eine Option</option>
              <option>Schule</option>
              <option>Verein</option>
              <option>Jugendgruppe</option>
              <option>Trainer</option>
              <option>Wohngruppe</option>
              <option>andere Institution</option>
            </select>

            <label className="field-label">Name des Verantwortlichen *</label>
            <input className="field" name="name" value={coop.name} onChange={onCoop} />

            <div className="field-row">
              <div>
                <label className="field-label">Stadt</label>
                <input className="field" name="stadt" value={coop.stadt} onChange={onCoop} />
              </div>
              <div>
                <label className="field-label">Straße</label>
                <input className="field" name="strasse" value={coop.strasse} onChange={onCoop} />
              </div>
            </div>

            <label className="field-label">E-Mail-Adresse *</label>
            <input className="field" type="email" name="email" value={coop.email} onChange={onCoop} />

            <label className="field-label">Webseite oder Instagram</label>
            <input className="field" name="web" value={coop.web} onChange={onCoop} />

            <label className="field-label">Information zur Gruppe</label>
            <textarea className="field" name="info" rows={3} value={coop.info} onChange={onCoop} />

            <label className="field-label">Bitte löse die Aufgabe: 29 − 11 = ?</label>
            <input className="field" name="captcha" value={coop.captcha} onChange={onCoop} />

            <label className="consent">
              <input type="checkbox" name="consent" checked={coop.consent} onChange={onCoop} />
              Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme zu, dass meine Angaben elektronisch erhoben und gespeichert werden.
            </label>

            <button type="submit" className="submit">Absenden</button>
            {coopStatus && (
              <div className={`status ${coopStatus.ok ? "ok" : "err"}`}>{coopStatus.msg}</div>
            )}
          </form>

          {/* Einzelperson */}
          <form id="form-indiv" className="form" onSubmit={submitIndiv}>
            <h3>Anmeldung als Einzelperson</h3>

            <label className="field-label">Name *</label>
            <input className="field" name="name" value={indiv.name} onChange={onIndiv} />

            <label className="field-label">Alter *</label>
            <input className="field" name="alter" value={indiv.alter} onChange={onIndiv} />

            <label className="field-label">E-Mail-Adresse *</label>
            <input className="field" type="email" name="email" value={indiv.email} onChange={onIndiv} />

            <label className="field-label">Namen der Erziehungsberechtigten</label>
            <input className="field" name="eltern" value={indiv.eltern} onChange={onIndiv} />

            <label className="field-label">Bitte löse die Aufgabe: 24 − 5 = ?</label>
            <input className="field" name="captcha" value={indiv.captcha} onChange={onIndiv} />

            <label className="consent">
              <input type="checkbox" name="consent" checked={indiv.consent} onChange={onIndiv} />
              Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme zu, dass meine Angaben elektronisch erhoben und gespeichert werden.
            </label>

            <button type="submit" className="submit">Absenden</button>
            {indivStatus && (
              <div className={`status ${indivStatus.ok ? "ok" : "err"}`}>{indivStatus.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
