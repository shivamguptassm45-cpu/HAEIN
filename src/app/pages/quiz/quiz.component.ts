import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { quizQuestions } from '../../data/quiz-questions';
import { QuizQuestion } from '../../models/quiz.model';
import { ProgressBarComponent } from '../../components/shared/progress-bar/progress-bar.component';
import { OptionCardComponent } from '../../components/shared/option-card/option-card.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [ProgressBarComponent, OptionCardComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 page-transition">
      <div class="max-w-3xl w-full space-y-8">
        
        <!-- Progress bar -->
        <app-progress-bar [progress]="progress()" class="animate-fade-in" />

        <!-- Question card -->
        <div class="glass p-8 md:p-12 rounded-3xl space-y-8 animate-scale-in">
          
          <!-- Question number and text -->
          <div class="space-y-4">
            <p class="text-lavender-600 font-semibold text-sm uppercase tracking-wider">
              Question {{ currentQuestionIndex() + 1 }} of {{ questions.length }}
            </p>
            <h2 class="font-playfair text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {{ currentQuestion()?.question }}
            </h2>
          </div>

          <!-- Options -->
          <div class="grid gap-4">
            @for (option of currentQuestion()?.options; track option.id) {
              <app-option-card
                [text]="option.text"
                [emoji]="option.emoji"
                [isSelected]="selectedOption() === option.id"
                (selected)="selectOption(option.id)" />
            }
          </div>

          <!-- Navigation buttons -->
          <div class="flex justify-between items-center pt-6 border-t border-white/30">
            @if (currentQuestionIndex() > 0) {
              <button
                (click)="previousQuestion()"
                class="btn-hover px-6 py-3 rounded-xl text-lavender-700 font-semibold hover:bg-white/50 transition-all">
                ← Previous
              </button>
            } @else {
              <div></div>
            }

            @if (selectedOption()) {
              <button
                (click)="nextQuestion()"
                class="btn-hover px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-lavender-500 text-white font-semibold shadow-lg">
                {{ isLastQuestion() ? 'See Results ✨' : 'Next →' }}
              </button>
            }
          </div>
        </div>

        <!-- Decorative hearts -->
        <div class="text-center text-2xl opacity-50 animate-pulse-slow">
          💜 ✨ 💜
        </div>
      </div>
    </div>
  `
})
export class QuizComponent implements OnInit {
  questions = quizQuestions;
  currentQuestionIndex = signal(0);
  selectedOption = signal<string | null>(null);
  progress = signal(0);

  currentQuestion = signal<QuizQuestion | undefined>(undefined);

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    const question = this.questions[this.currentQuestionIndex()];
    this.currentQuestion.set(question);
    
    // Check if there's a saved answer
    const savedAnswer = this.quizService.getAnswer(question.id);
    this.selectedOption.set(savedAnswer?.optionId || null);
    
    this.updateProgress();
  }

  selectOption(optionId: string): void {
    this.selectedOption.set(optionId);
    
    // Save answer
    this.quizService.addAnswer({
      questionId: this.currentQuestion()!.id,
      optionId
    });
    
    this.updateProgress();
  }

  nextQuestion(): void {
    if (this.isLastQuestion()) {
      this.router.navigate(['/loading']);
    } else {
      this.currentQuestionIndex.update(i => i + 1);
      this.loadQuestion();
    }
  }

  previousQuestion(): void {
    this.currentQuestionIndex.update(i => i - 1);
    this.loadQuestion();
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex() === this.questions.length - 1;
  }

  updateProgress(): void {
    const answered = this.quizService.answeredCount();
    this.progress.set((answered / this.questions.length) * 100);
  }
}