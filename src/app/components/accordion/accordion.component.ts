import { Component } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionItemComponent],
  template: `
    <section class="px-6 md:px-10 lg:px-16 py-16 md:py-20 max-w-3xl">
      <p class="text-slate-500 text-sm md:text-base mb-4">
        Where we find GoodCo&#8217;s
      </p>
      <h1 class="text-[36px] md:text-[44px] lg:text-[48px] font-bold text-slate-800 leading-[1.1] tracking-tight mb-12">
        We know what<br>neighborhoods<br>to look in
      </h1>

      <div class="mt-8">
        @for (item of items; track item.title) {
          <app-accordion-item
            [title]="item.title"
            [description]="item.description"
          />
        }
      </div>
    </section>
  `,
})
export class AccordionComponent {
  items = [
    {
      title: 'Data Sciences',
      description: 'We identify neighborhoods with thriving data science ecosystems, proximity to research institutions, and a concentration of analytics talent driving innovation.',
    },
    {
      title: 'Dominant Vertical Software',
      description: 'Our analysis targets areas where vertical software companies dominate, creating specialized tech clusters with deep industry expertise and market leadership.',
    },
    {
      title: 'Life Sciences',
      description: 'We focus on neighborhoods near biotech corridors, research hospitals, and pharmaceutical hubs where life science innovation flourishes.',
    },
    {
      title: 'Software Systems of Record',
      description: 'We locate communities anchored by mission-critical software providers \u2014 the systems that power industries and create lasting value.',
    },
    {
      title: 'Alternative Real Estate',
      description: 'Our team identifies emerging neighborhoods where alternative real estate models are reshaping how people live, work, and invest.',
    },
    {
      title: 'Highly Engineered Manufacturing',
      description: 'We target precision manufacturing clusters where advanced engineering, skilled labor, and supply chain excellence converge.',
    },
  ];
}
