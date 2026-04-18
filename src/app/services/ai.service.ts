import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { DramaRecommendation } from '../models/quiz.model';
import { queenOfTears } from '../data/drama-data';

@Injectable({
  providedIn: 'root'
})
export class AIService {
  /**
   * Mock AI service that always recommends Queen of Tears
   * This creates the illusion of analyzing answers while 
   * always returning the intended recommendation
   */
  getRecommendation(): Observable<DramaRecommendation> {
    // Simulate AI processing with 2.5 second delay
    return of(queenOfTears).pipe(delay(2500));
  }

  analyzeUserPreferences(): Observable<string> {
    // Simulate analysis steps
    const steps = [
      'Analyzing your love language...',
      'Detecting emotional preferences...',
      'Matching with perfect story...',
      'Finding Haein\'s ideal drama...'
    ];
    
    return of(steps[Math.floor(Math.random() * steps.length)]).pipe(delay(800));
  }
}