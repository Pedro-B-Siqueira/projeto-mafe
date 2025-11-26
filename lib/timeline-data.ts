// Timeline memories structure
// Add your special memories here with dates and descriptions

export interface TimelineMemory {
  id: number
  date: string // Format: "DD/MM/YYYY"
  title: string
  description: string
  icon?: string // Optional emoji or icon
}

export const timelineMemories: TimelineMemory[] = [
  {
    id: 1,
    date: "16/02/2024",
    title: "Flertes",
    description:
      "O início de tudo. Foi por volta dessa data que começamos a nos aproximarmos e lançar alguns flertes, até hoje, você é foi a minha melhor decisão.",
    icon: "👋",
  },
  {
    id: 2,
    date: "25/02/2024",
    title: "Primeiro beijo",
    description:
      "Até hoje nunca esqueci do nosso primeiro beijo, eu tava sonhando com ele fazia algum tempo. Foi perfeito, foi inesquecível, foi com você.",
    icon: "💋",
  },
  {
    id: 3,
    date: "02/03/2024",
    title: "Primeiro Role",
    description:
      "Nosso primeiro passeio juntos, indo pro cinema com outras pessoas. Cada segundo ao seu lado parecia voar, não queria que aquele noite terminasse, nunca vou me esquecer o quão bom foi te beijar naquela sala de cinema.",
    icon: "🎡",
  },
  {
    id: 4,
    date: "09/03/2024",
    title: "Conhecendo os pais",
    description:
      "O dia em que eu quase botei um ovo de ansiedade, mas também de felicidade. Eu amo fazer parte da sua família e esse foi um passo importante para gente.",
    icon: "👨‍👩‍👧",
  },
  {
    id: 5,
    date: "06/09/2024 & 02/12/2024",
    title: "Aniversários juntos",
    description:
      "Passar nossos aniversários com a companhia um do outro foi mágico. O verdadeiro presente dos meus 18 anos foi você, meu amor!",
    icon: "🎂",
  },
  {
    id: 6,
    date: "22/12/2024",
    title: "Formatura juntos",
    description:
      "Conquistamos juntos esse objetivo, minha nega! Ter você ao meu lado nesse momento tão especial tornou tudo ainda mais importante, que essa seja uma de muitas outras conquistas nossas.",
    icon: "🎓",
  },
  {
    id: 7,
    date: "Futuro",
    title: "Muito mais por vir",
    description:
      "Esta é apenas o começo da nossa história. Muitos momentos incríveis nos aguardam, e eu quero viver cada um deles ao seu lado para todo sempre <3.",
    icon: "🌟",
  },
]
