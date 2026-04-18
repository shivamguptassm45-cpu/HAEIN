import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 page-transition">
      <div class="max-w-3xl w-full space-y-10">
        
        <!-- Main message -->
        <div class="glass p-10 md:p-16 rounded-3xl space-y-8 text-center animate-scale-in">
          
          <!-- Heart icon -->
          <div class="text-7xl animate-pulse-slow">
            💜
          </div>

          <!-- Personalized message -->
          <div class="space-y-6">
            <h1 class="font-playfair text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              I didn't build this randomly, Haein...
            </h1>
            
            <p class="text-2xl md:text-3xl text-lavender-700 font-light">
              I think you'll <span class="font-playfair font-semibold">love</span> this ❤️
            </p>
            
            <div class="glass-dark p-6 rounded-2xl">
              <p class="text-xl text-gray-700 leading-relaxed">
                So... give it <span class="font-semibold text-lavender-600">one chance?</span>
              </p>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              (click)="acceptRecommendation()"
              class="btn-hover px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary-500 to-lavender-500 text-white shadow-lg">
              Pakka Dekhungi! 😌
            </button>
            
            <button
              (click)="showPlayfulMessage()"
              class="btn-hover glass-dark px-8 py-4 rounded-full text-lg font-semibold text-gray-700 hover:bg-white/50 transition-all">
              Still need another option? 🙄
            </button>
          </div>

          <!-- Playful response -->
          @if (showMessage()) {
            <div class="glass-dark p-6 rounded-2xl animate-scale-in border-2 border-lavender-300">
              <p class="text-xl text-lavender-700 font-medium">
                Okay Haein... but I know you'll come back 😏
              </p>
              <p class="text-sm text-gray-600 mt-2">
                This story is waiting for you 💜
              </p>
            </div>
          }
        </div>

        <!-- Decorative elements -->
        <div class="text-center space-y-4 opacity-70 animate-fade-in" style="animation-delay: 0.3s;">
          <div class="text-3xl flex justify-center gap-3">
            <span class="animate-bounce" style="animation-delay: 0s;">🌸</span>
            <span class="animate-bounce" style="animation-delay: 0.1s;">💜</span>
            <span class="animate-bounce" style="animation-delay: 0.2s;">✨</span>
          </div>
          <p class="text-sm text-gray-600 font-light">
            Bade Piyaar se Banaya Hain, just for you, Haein
          </p>
        </div>

        <!-- Success message -->
        @if (accepted()) {
          <div class="glass p-8 rounded-3xl text-center space-y-4 animate-scale-in border-2 border-primary-300">
            <div class="text-5xl">🎉</div>
            <h2 class="font-playfair text-3xl font-bold text-primary-700">
              Yes! I knew you'd love it! 💜
            </h2>
            <p class="text-lg text-gray-700">
              Hong Hae-in is special, Haein....Just Like YOUU! 
              There was a time when you convinced me to watch K-Drama....and now I'm the one convincing You!✨
            </p>
            <button
              (click)="restart()"
              class="btn-hover px-6 py-3 rounded-full text-sm font-semibold text-lavender-700 hover:bg-white/50 transition-all mt-4">
              Start Over →
            </button>
          </div>
        }
      </div>
    </div>
  `
})
export class FinalComponent {
  showMessage = signal(false);
  accepted = signal(false);

  constructor(private router: Router) {}

  acceptRecommendation(): void {
    this.accepted.set(true);
  }

  showPlayfulMessage(): void {
    this.showMessage.set(true);
  }

  restart(): void {
    this.router.navigate(['/']);
  }
}