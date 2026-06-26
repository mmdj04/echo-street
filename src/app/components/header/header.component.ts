import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 bg-transparent">
      <a href="/" class="flex items-center gap-2">
        <svg class="w-7 h-7 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 12c2.5-4 5 0 7.5-4s5 0 7.5-4" stroke-linecap="round"/>
          <path d="M4 16c2.5-4 5 0 7.5-4s5 0 7.5-4" stroke-linecap="round" opacity="0.5"/>
        </svg>
        <span class="text-slate-800 font-semibold text-sm tracking-[0.15em] uppercase">
          Echo Street
        </span>
      </a>

      <button
        (click)="toggleMenu()"
        class="flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
        aria-label="Menu"
      >
        <span
          class="w-6 h-[1.5px] bg-slate-800 transition-all duration-300 origin-center"
          [class.rotate-45]="menuOpen"
          [class.translate-y-[5px]="menuOpen"
        ></span>
        <span
          class="w-6 h-[1.5px] bg-slate-800 transition-all duration-300"
          [class.-rotate-45]="menuOpen"
          [class.-translate-y-[2px]="menuOpen"
        ></span>
      </button>
    </header>
  `,
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
