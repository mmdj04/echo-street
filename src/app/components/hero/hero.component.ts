import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative w-full h-[42vh] md:h-[48vh] overflow-hidden rounded-b-[2rem]">
      <div class="hero-gradient absolute inset-0"></div>
      <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-fuchsia-400/50 via-pink-400/30 to-transparent"></div>
      <div class="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-fuchsia-400/50 via-pink-400/30 to-transparent"></div>
    </section>
  `,
  styles: [`
    .hero-gradient {
      background:
        radial-gradient(ellipse at 10% 50%, rgba(186, 218, 232, 0.8) 0%, transparent 55%),
        radial-gradient(ellipse at 85% 15%, rgba(216, 191, 230, 0.7) 0%, transparent 50%),
        radial-gradient(ellipse at 55% 85%, rgba(190, 227, 212, 0.6) 0%, transparent 45%),
        radial-gradient(ellipse at 45% 25%, rgba(210, 195, 232, 0.5) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 55%, rgba(227, 218, 195, 0.3) 0%, transparent 40%),
        linear-gradient(180deg, #edf1f6 0%, #f3f5f9 40%, #fafbfc 70%, #ffffff 100%);
    }
  `],
})
export class HeroComponent {}
