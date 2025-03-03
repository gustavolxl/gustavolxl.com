export interface BookReview {
  id: string;
  title: string;
  author: string;
  rating: number;
}

export const bookReviews: BookReview[] = [
  {
    id: '1',
    title: 'Sapiens: Uma Breve História da Humanidade',
    author: 'Yuval Noah Harari',
    rating: 5
  },
  {
    id: '2',
    title: 'Meditações',
    author: 'Marco Aurélio',
    rating: 5
  },
  {
    id: '3',
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    rating: 4
  },
  {
    id: '4',
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    rating: 5
  },
  {
    id: '5',
    title: 'Algoritmos para Viver',
    author: 'Brian Christian e Tom Griffiths',
    rating: 4
  },
  {
    id: '6',
    title: 'Ensaio sobre a Cegueira',
    author: 'José Saramago',
    rating: 5
  },
  {
    id: '7',
    title: 'Mindset: A Nova Psicologia do Sucesso',
    author: 'Carol S. Dweck',
    rating: 4
  },
  {
    id: '8',
    title: 'O Mito de Sísifo',
    author: 'Albert Camus',
    rating: 5
  },
  {
    id: '9',
    title: 'Rápido e Devagar: Duas Formas de Pensar',
    author: 'Daniel Kahneman',
    rating: 5
  },
  {
    id: '10',
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    rating: 4
  },
  {
    id: '11',
    title: 'O Mundo Assombrado pelos Demônios',
    author: 'Carl Sagan',
    rating: 5
  },
  {
    id: '12',
    title: 'A Insustentável Leveza do Ser',
    author: 'Milan Kundera',
    rating: 4
  }
];