import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-option-card',
  standalone: true,
  template: `
    <button
      (click)="selected.emit()"
      [class.selected]="isSelected()"
      class="glass card-hover w-full p-6 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden">
      
      <!-- Gradient overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-lavender-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div class="relative flex items-center gap-4">
        @if (emoji()) {
          <div class="text-4xl transform group-hover:scale-110 transition-transform duration-300">
            {{ emoji() }}
          </div>
        }
        <p class="text-gray-800 font-medium text-lg flex-1 group-hover:text-lavender-700 transition-colors">
          {{ text() }}
        </p>
      </div>
      
      <!-- Selection indicator -->
      @if (isSelected()) {
        <div class="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-full flex items-center justify-center text-white text-xs">
          ✓
        </div>
      }
    </button>
  `,
  styles: [`
    .selected {
      background: rgba(139, 92, 246, 0.15) !important;
      border: 2px solid rgba(139, 92, 246, 0.5);
      transform: scale(1.02);
    }
  `]
})
export class OptionCardComponent {
  text = input.required<string>();
  emoji = input<string>();
  isSelected = input<boolean>(false);
  selected = output<void>();
}