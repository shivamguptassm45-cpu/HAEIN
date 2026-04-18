import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AIService } from '../../services/ai.service';
import { LoaderComponent } from '../../components/shared/loader/loader.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [LoaderComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 page-transition">
      <div class="max-w-2xl w-full text-center space-y-12">
        
        <!-- Loading animation -->
        <div class="animate-scale-in">
          <app-loader />
        </div>

        <!-- Loading messages -->
        <div class="space-y-6 animate-fade-in" style="animation-delay: 0.3s;">
          <h2 class="font-playfair text-3xl md:text-4xl font-bold text-lavender-700">
            Analyzing your vibe, Haein... 💭
          </h2>
          
          <div class="glass p-6 rounded-2xl">
            <p class="text-lg text-gray-700 font-light">
              Finding a story that matches your heart...
            </p>
          </div>
        </div>

        <!-- Subtle animation indicators -->
        <div class="flex justify-center gap-3 opacity-70">
          <div class="w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
          <div class="w-2 h-2 bg-lavender-400 rounded-full animate-ping" style="animation-delay: 0.2s;"></div>
          <div class="w-2 h-2 bg-primary-400 rounded-full animate-ping" style="animation-delay: 0.4s;"></div>
        </div>
      </div>
    </div>
  `
})
export class LoadingComponent implements OnInit {
  constructor(
    private aiService: AIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Simulate AI processing and navigate to result
    this.aiService.getRecommendation().subscribe(() => {
      this.router.navigate(['/result']);
    });
  }
}