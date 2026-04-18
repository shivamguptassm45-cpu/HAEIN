import { Injectable, signal, computed } from '@angular/core';
import { QuizAnswer } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private answers = signal<QuizAnswer[]>([]);

  readonly userAnswers = this.answers.asReadonly();
  readonly answeredCount = computed(() => this.answers().length);
  readonly isComplete = computed(() => this.answers().length >= 5);

  addAnswer(answer: QuizAnswer): void {
    this.answers.update(answers => {
      const existingIndex = answers.findIndex(a => a.questionId === answer.questionId);
      if (existingIndex >= 0) {
        const updated = [...answers];
        updated[existingIndex] = answer;
        return updated;
      }
      return [...answers, answer];
    });
  }

  getAnswer(questionId: number): QuizAnswer | undefined {
    return this.answers().find(a => a.questionId === questionId);
  }

  reset(): void {
    this.answers.set([]);
  }

  getProgress(): number {
    return (this.answers().length / 5) * 100;
  }
}