import styles from "./styles.module.css";
import logoIfma from "../../assets/logo-ifma.png";
import { useReveal } from "../../hooks/useReveal";

type AcademicEntry = {
  degree: string;
  level: string;
  institution: string;
  period: string;
  studying: boolean;
};

const academicData: AcademicEntry[] = [
  {
    degree: "Técnologo em Análise e Desenvolvimento de Sistemas",
    level: "Formação Superior",
    institution: "Instituto Federal do Maranhão - IFMA",
    period: "Jul/2023 - Jun/2026",
    studying: false,
  },
  {
    degree: "Técnico em Informática",
    level: "Ensino Médio Técnico",
    institution: "Instituto Federal do Maranhão - IFMA",
    period: "Fev/2019 - Fev/2022",
    studying: false,
  },
];

export function AcademicHistory() {
  // Cascata dos itens de formação ao entrar na viewport (escopo = esta seção).
  const root = useReveal<HTMLElement>({ selector: ".reveal-item", y: 24, stagger: 0.12 });
  return (
    <section className={styles.container} ref={root}>
      <h2 className={styles.title}> Formação Acadêmica</h2>
      <ul className={styles.list}>
        {academicData.map((entry, index) => (
          <li key={index} className={`${styles.item} reveal-item`}>
            <div>
              <h3 className={styles.degree}>{entry.degree}</h3>
              <p className={styles.institution}>{entry.institution}</p>
              <span className={styles.period}>{entry.period}</span>

              {entry.studying && (
                <span className={styles.studying}>Cursando 6/6</span>
              )}
            </div>

            <div>
              <img
                style={{
                  //backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "3px 0px",
                }}
                src={logoIfma}
                alt="logo ifma"
                width={60}
              />
            </div>
            <span className={styles.levelBadge}>{entry.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
