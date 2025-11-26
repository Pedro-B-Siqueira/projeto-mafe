// Photo data structure
// Add your photos to the /public/gallery folder and update this file with the photo details
// Format: gallery/photo1.jpg, gallery/photo2.jpg, etc.

export interface Photo {
  id: number
  src: string
  date: string // Format: "DD/MM/YYYY"
  description: string
}

export const allPhotos: Photo[] = [
  {
    id: 1,
    src: "/gallery/photo01",
    date: "27/02/2024",
    description: "Nossa primeira fotinha juntos",
  },
  {
    id: 2,
    src: "/gallery/photo02.jpg",
    date: "29/02/2024",
    description: "Eu todo bobo e você toda linda",
  },
  {
    id: 3,
    src: "/gallery/photo03.jpg",
    date: "03/03/2024",
    description: "Primeiro passeio nosso no cinema!!!",
  },
  {
    id: 4,
    src: "/gallery/photo04.jpg",
    date: "10/03/2024",
    description: "Nosso primeiro encontro após um dia incrível",
  },
  {
    id: 5,
    src: "/gallery/photo05.jpg",
    date: "30/03/2024",
    description: "Mais um dos nossos dias juntos na sua casinha, bem no início",
  },
  {
    id: 6,
    src: "/gallery/photo06.jpg",
    date: "30/03/2024",
    description: "Nois fazendo palhaçada",
  },
  {
    id: 7,
    src: "/gallery/photo07.jpg",
    date: "11/05/2024",
    description: "Dia do aniversário do barba, amo essas fotos",
  },
  {
    id: 8,
    src: "/gallery/photo08.jpg",
    date: "24/05/2024",
    description: "Nois na semana da vunesp, na padaria favorita :)",
  },
  {
    id: 9,
    src: "/gallery/photo09.jpg",
    date: "16/05/2024",
    description: "Polaroides nossas e seu presente maravilhoso pra mim",
  },
  {
    id: 10,
    src: "/gallery/photo10.jpg",
    date: "09/06/2024",
    description: "NOSSO DIIIIAAAAAAA",
  },
  {
    id: 11,
    src: "/gallery/photo11.jpg",
    date: "04/08/2024",
    description: "Só gosto dessa foto porque você disse que eu fiquei bonito nela <3",
  },
  {
    id: 12,
    src: "/gallery/photo12.jpg",
    date: "30/08/2024",
    description: "Eu te amo, minha Morticia Addams!",
  },
  {
    id: 13,
    src: "/gallery/photo13.jpg",
    date: "28/09/2024",
    description: "Nega não lembro de onde é essa foto, mas você tá linda nela",
  },
  {
    id: 14,
    src: "/gallery/photo14.jpg",
    date: "09/11/2024",
    description: "Role no shops nega!!!!",
  },
  {
    id: 15,
    src: "/gallery/photo15.jpg",
    date: "01/12/2024",
    description: "Você merece todas as rosas do mundo, mas nenhuma terá seu perfume tão doce",
  },
  {
    id: 16,
    src: "/gallery/photo16.jpg",
    date: "09/12/2024",
    description: "Que honra estar ao seu lado, 18 anos de você nega!",
  },
  {
    id: 17,
    src: "/gallery/photo17.jpg",
    date: "02/12/2024",
    description: "KKKKKKK SEM PALAVRAS",
  },
  {
    id: 18,
    src: "/gallery/photo18.jpg",
    date: "17/12/2024",
    description: "Um dos nossos momentos mais especiais, encaminhando para nossa formatura juntos",
  },
  {
    id: 19,
    src: "/gallery/photo19.jpg",
    date: "22/12/2024",
    description: "Diaba vou matar você e esse alient bosta",
  },
  {
    id: 20,
    src: "/gallery/photo20.jpg",
    date: "31/05/2025",
    description: "EU AMO ESSA FOTO! A gente fica muito estilosos no frio hein nega",
  },
  {
    id: 21,
    src: "/gallery/photo21.jpg",
    date: "19/11/2025",
    description: "Uma bem recente até, mas que eu acho super linda, eu te amo nega <3",
  },
  {
    id: 22,
    src: "/gallery/photo22.jpg",
    date: "11/10/2025",
    description: "KKKKKKKKKKKKKK vei esse filtro nao da",
  },
  {
    id: 23,
    src: "/gallery/photo23.jpg",
    date: "25/10/2024",
    description: "baby você não é do kiss mas eu aceitaria uns kisses seus rsrsrsrsrs",
  }
]

export function getRandomPhotos(count = 5): Photo[] {
  const shuffled = [...allPhotos].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, allPhotos.length))
}
