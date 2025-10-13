import styles from "./styles.module.css";
import logoIfma from "../../assets/logo-ifma.png";

type AcademicEntry = {
  degree: string;
  institution: string;
  period: string;
  studying: boolean;
};

const academicData: AcademicEntry[] = [
  {
    degree: "Técnologo em Análise e Desenvolvimento de Sistemas",
    institution: "Instituto Federal do Maranhão - IFMA",
    period: "Jul/2023 - Ago/2026",
    studying: true,
  },
  {
    degree: "Técnico em Informática",
    institution: "Instituto Federal do Maranhão - IFMA",
    period: "Fev/2019 - Fev/2022",
    studying: false,
  },
];

export function AcademicHistory() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}> Formação Acadêmica</h2>
      <ul className={styles.list}>
        {academicData.map((entry, index) => (
          <li key={index} className={styles.item}>
            <div>
              <h3 className={styles.degree}>{entry.degree}</h3>
              <p className={styles.institution}>{entry.institution}</p>
              <span className={styles.period}>{entry.period}</span>

              {entry.studying && (
                <span className={styles.studying}>Cursando</span>
              )}
            </div>

            <div>
              <img
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "3px 0px",
                }}
                src={logoIfma}
                alt="logo ifma"
                width={60}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
