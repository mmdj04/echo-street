import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  template: `
    <div class="border-b border-slate-200/80">
      <button
        (click)="toggle()"
        class="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span class="text-[17px] md:text-[18px] font-medium text-slate-800 group-hover:text-slate-500 transition-colors duration-200">
          {{ title }}
        </span>
        <svg
          class="w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ml-4"
          [class.rotate-180]="isOpen"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div
        class="overflow-hidden transition-all duration-300 ease-in-out"
        [style.max-height]="isOpen ? '200px' : '0px'"
        [style.opacity]="isOpen ? '1' : '0'"
      >
        <p class="pb-5 text-slate-500 text-sm leading-relaxed pr-8">
          {{ description }}
        </p>
      </div>
    </div>
  `,
})
export class AccordionItemComponent {
  @Input() title = '';
  @Input() description = '';
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
