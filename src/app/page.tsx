import Link from "next/link";
import styles from "./page.module.css";

const demoMail =
  "mailto:office@mp-x.at?subject=Demo%20MP-X%20ONE&body=Hallo%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20Demo%20von%20MP-X%20ONE.%0A%0ABitte%20meldet%20euch%20bei%20mir.%0A%0AVielen%20Dank!";

const signals = [
  {
    label: "Jetzt wichtig",
    title: "Rechnung überfällig",
    meta: "€ 120,00 offen · fällig seit 05.04.2026",
    action: "Zahlung klären",
    tone: "critical",
  },
  {
    label: "Danach",
    title: "Angebot bereit für den nächsten Schritt",
    meta: "Kund:in hat zugesagt · ONE bereitet vor",
    action: "Weiterführen",
    tone: "calm",
  },
  {
    label: "Im Blick",
    title: "Follow up nicht verlieren",
    meta: "Kontakt wartet · Erinnerung aktiv",
    action: "Öffnen",
    tone: "quiet",
  },
];

const principles = [
  {
    number: "01",
    title: "ONE priorisiert.",
    text: "Du startest nicht mit Listen. Du startest mit dem, was heute wirklich relevant ist.",
  },
  {
    number: "02",
    title: "ONE führt.",
    text: "Jede Information endet in einer klaren nächsten Aktion. Nicht in noch mehr Navigation.",
  },
  {
    number: "03",
    title: "ONE verbindet.",
    text: "Alles greift ineinander, ohne dass du darüber nachdenken musst.",
  },
];

const flowLines = [
  "Nichts geht verloren.",
  "Du suchst nicht.",
  "Der nächste Schritt zeigt sich.",
  "Du weißt, was als Nächstes passiert.",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="MP-X ONE Startseite">
          MP-X ONE
        </Link>

        <nav className={styles.nav} aria-label="Hauptnavigation">
          <a href="#prinzip">Prinzip</a>
          <a href="#alltag">Alltag</a>
          <a href="mailto:office@mp-x.at">Kontakt</a>
          <a className={styles.navDemo} href={demoMail}>
            Demo anfragen
          </a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>ONE · ARBEIT, DIE SICH SELBST SORTIERT</p>
          <h1>
            Du weißt, was zu tun ist.
            <span>ONE auch.</span>
          </h1>
          <p className={styles.lead}>
            ONE zeigt dir, was wirklich zählt. Und bringt dich direkt dorthin.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href={demoMail}>
              Demo anfragen
            </a>
            <a className={styles.secondaryButton} href="mailto:office@mp-x.at">
              office@mp-x.at
            </a>
          </div>
        </div>

        <div className={styles.stage} aria-label="ONE priorisiert den Arbeitstag">
          <div className={styles.haloPrimary} />
          <div className={styles.haloSecondary} />
          <div className={styles.guidanceLine} />

          <div className={styles.commandCenter}>
            <div className={styles.commandHeader}>
              <span>Heute</span>
              <strong>ONE hat deinen Tag sortiert.</strong>
            </div>

            <div className={styles.signalStack}>
              {signals.map((signal) => (
                <article
                  className={`${styles.signal} ${
                    signal.tone === "critical"
                      ? styles.signalCritical
                      : signal.tone === "calm"
                        ? styles.signalCalm
                        : styles.signalQuiet
                  }`}
                  key={signal.title}
                >
                  <div className={styles.signalText}>
                    <p>{signal.label}</p>
                    <h2>{signal.title}</h2>
                    <span>{signal.meta}</span>
                  </div>
                  <a href={demoMail}>{signal.action}</a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <p>ONE ist nicht noch ein Tool.</p>
        <h2>
          ONE ist der Moment,
          <span>in dem Arbeit wieder eindeutig wird.</span>
        </h2>
      </section>

      <section className={styles.principles} id="prinzip">
        {principles.map((item) => (
          <article className={styles.principle} key={item.title}>
            <p>{item.number}</p>
            <h3>{item.title}</h3>
            <span>{item.text}</span>
          </article>
        ))}
      </section>

      <section className={styles.everyday} id="alltag">
        <div className={styles.everydayCopy}>
          <p className={styles.eyebrow}>FÜR DEN GANZEN ARBEITSTAG</p>
          <h2>Du arbeitest nicht mehr in Software.</h2>
          <span>
            Du gehst durch deinen Tag. Und ONE geht mit. Vom ersten offenen
            Punkt bis zur erledigten Aufgabe.
          </span>
        </div>

        <div className={styles.flowWrap} aria-label="ONE führt durch den Arbeitstag">
          {flowLines.map((line, index) => (
            <p
              className={index === 2 ? styles.focus : styles.dim}
              key={line}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.close}>
        <p>MP-X ONE</p>
        <h2>Für Unternehmen, die arbeiten wollen. Nicht Software bedienen.</h2>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href={demoMail}>
            Demo anfragen
          </a>
          <a className={styles.secondaryButton} href="mailto:office@mp-x.at">
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </main>
  );
}
