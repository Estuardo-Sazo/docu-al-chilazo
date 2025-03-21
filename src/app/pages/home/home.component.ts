import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import path from 'path';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  documentTypes = [
    {
      title: 'Carta de Recomendación',
      description: 'Genera carta de recomendación persionalizada en segundos.',
      path: 'recomendation',
    },
    {
      title: 'Carta Laboral',
      description: 'Crea constancias laborales profesionales y detalladas',
      path:'work',
    },
    {
      title: 'Carta de Renuncia',
      description: 'Genera carta de renuncia en minutos.',
      path:'retirement',
    },
    {
      title: 'Carta de Poder',
      description: 'Generer carta poder con todos los elementos necesarios.',
      path:'power',
    },
  ]

  constructor(private strollServie: ScrollService) {}

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.strollServie.scrollToElement(sectionId);
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el: Element) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.75;
      if (isVisible) {
        el.classList.add('visible');
      }
    });
  }
}
