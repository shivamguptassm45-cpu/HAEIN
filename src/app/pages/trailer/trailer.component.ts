import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { queenOfTears } from '../../data/drama-data';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 page-transition">
      <div class="max-w-5xl w-full space-y-8">
        
        <!-- Header -->
        <div class="text-center space-y-4 animate-fade-in">
          <h1 class="font-playfair text-3xl md:text-4xl font-bold text-lavender-700">
            This feels like your kind of story, Haein 👀
          </h1>
          <p class="text-lg text-gray-600">
            Watch the magic unfold...
          </p>
        </div>

        <!-- Trailer embed -->
        <div class="glass p-6 md:p-8 rounded-3xl animate-scale-in" style="animation-delay: 0.2s;">
          <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              [src]="trailerUrl()"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <!-- Continue button -->
        <div class="text-center animate-fade-in" style="animation-delay: 0.4s;">
          <button
            (click)="continue()"
            class="btn-hover px-10 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-primary-500 to-lavender-500 text-white shadow-lg">
            Continue ✨
          </button>
        </div>

        <!-- Decorative -->
        <div class="text-center text-2xl opacity-50 animate-pulse-slow">
          💜 🎬 💜
        </div>
      </div>
    </div>
  `
})
export class TrailerComponent {
  trailerUrl = signal<SafeResourceUrl>(null!);

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.trailerUrl.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(queenOfTears.trailerUrl)
    );
  }

  continue(): void {
    this.router.navigate(['/final']);
  }
}