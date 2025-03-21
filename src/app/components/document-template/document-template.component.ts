import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-document-template',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule, NavbarComponent],
  templateUrl: './document-template.component.html',
  styleUrl: './document-template.component.css',
})
export class DocumentTemplateComponent {}
