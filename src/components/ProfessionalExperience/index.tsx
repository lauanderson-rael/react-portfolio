
import styles from './styles.module.css';

type Experience = {
  role: string;
  period: string;
  description: string[];
  note?: string;
};

const experienceData: Experience[] = [
  {
    role: 'Freelancer Python',
    period: 'Jan/2025 – Fev/2025',
    note: 'Automação de Processos com Python (Repositório no Github)',
    description: [
      'Desenvolvi uma automação para otimizar processos de manipulação de documentos PDF e Word.',
      'Implementei interface gráfica para facilitar o uso por pessoas não técnicas.',
    ],
  },
  {
    role: 'Freelancer',
    period: 'Mai/2024 – Ago/2024',
    note: 'Aplicação de Apostas Esportivas (Link do projeto)',
    description: [
      'Desenvolvimento front-end de uma aplicação web, criação de páginas web integrativas e responsivas.',
      'Tecnologias: HTML, CSS e JavaScript.',
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
                <li key={idx} className={styles.point}>● {point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
