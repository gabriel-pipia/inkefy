import {
  trigger,
  transition,
  style,
  query,
  animate
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    // Initial state of new page
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' })
    ], { optional: true }),

    // Animate new page in
    query(':enter', [
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true })
  ])
]);
