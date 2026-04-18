export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  icon?: string;
  emoji?: string;
}

export interface QuizAnswer {
  questionId: number;
  optionId: string;
}

export interface DramaRecommendation {
  title: string;
  koreanTitle: string;
  poster: string;
  description: string;
  whyYouWillLove: string[];
  trailerUrl: string;
  genre: string[];
  year: number;
}