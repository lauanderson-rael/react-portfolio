import styles from "./styles.module.css";
type Experience = {
  role: string;
  period: string;
  description: string[];
  note?: string;
};

const experienceData: Experience[] = [
  {
    role: "Estagiário de Desenvolvimento Web",
    period: "Ago/2025 – Atual",
    note: "Empresa: OKN",
    description: [
      "Auxilio no desenvolvimento de aplicações web utilizando TypeScript e Node.js.",
      "Implementação de testes end-to-end com Cypress.",
      "Automação de processos com Python e Selenium.",
      "Criação de plugins para wordpress.",
    ],
  },
  {
    role: "Freelancer Python",
    period: "Jan/2025 – Fev/2025",
    note: "Trabalho freeLancer",
    description: [
      "Desenvolvi uma automação para otimizar processos de manipulação de documentos PDF e Word.",
      "Implementei interface gráfica para facilitar o uso por pessoas não técnicas.",
    ],
  },
];

export function ProfessionalExperience() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experiência Profissional</h2>
      <ul className={styles.list}>
        {experienceData.map((exp, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.role}>
              {exp.role} <span className={styles.period}>({exp.period})</span>
            </h3>
            {exp.note && <p className={styles.note}>{exp.note}</p>}
            <ul className={styles.description}>
              {exp.description.map((point, idx) => (
                <li key={idx} className={styles.point}>
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
