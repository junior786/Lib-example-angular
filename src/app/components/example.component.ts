import { Component } from '@angular/core';
import { ButtonComponent } from 'lib-test';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  template: `
    <div class="example-container">
      <h2>Exemplo de uso da Lib-Test</h2>

      <section class="button-section">
        <h3>Botões Básicos</h3>
        <div class="button-group">
          <lib-button variant="basic" color="primary">Basic</lib-button>
          <lib-button variant="basic" color="accent">Accent</lib-button>
          <lib-button variant="basic" color="warn">Warn</lib-button>
        </div>
      </section>

      <section class="button-section">
        <h3>Botões Raised (Elevados)</h3>
        <div class="button-group">
          <lib-button variant="raised" color="primary">Primary</lib-button>
          <lib-button variant="raised" color="accent">Accent</lib-button>
          <lib-button variant="raised" color="warn">Warn</lib-button>
        </div>
      </section>

      <section class="button-section">
        <h3>Botões Flat (Preenchidos)</h3>
        <div class="button-group">
          <lib-button variant="flat" color="primary">Primary</lib-button>
          <lib-button variant="flat" color="accent">Accent</lib-button>
          <lib-button variant="flat" color="warn">Warn</lib-button>
        </div>
      </section>

      <section class="button-section">
        <h3>Botões Stroked (Com Borda)</h3>
        <div class="button-group">
          <lib-button variant="stroked" color="primary">Primary</lib-button>
          <lib-button variant="stroked" color="accent">Accent</lib-button>
          <lib-button variant="stroked" color="warn">Warn</lib-button>
        </div>
      </section>

      <section class="button-section">
        <h3>Botões de Ícone</h3>
        <div class="button-group">
          <lib-button variant="icon" color="primary">
            <mat-icon>favorite</mat-icon>
          </lib-button>
          <lib-button variant="icon" color="accent">
            <mat-icon>delete</mat-icon>
          </lib-button>
          <lib-button variant="icon" color="warn">
            <mat-icon>bookmark</mat-icon>
          </lib-button>
        </div>
      </section>

      <section class="button-section">
        <h3>FAB (Floating Action Buttons)</h3>
        <div class="button-group">
          <lib-button variant="fab" color="primary">
            <mat-icon>add</mat-icon>
          </lib-button>
          <lib-button variant="mini-fab" color="accent">
            <mat-icon>edit</mat-icon>
          </lib-button>
        </div>
      </section>

      <section class="button-section">
        <h3>Estados</h3>
        <div class="button-group">
          <lib-button variant="raised" color="primary">Habilitado</lib-button>
          <lib-button variant="raised" color="primary" [disabled]="true">Desabilitado</lib-button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .example-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      margin-bottom: 24px;
      font-size: 28px;
    }

    .button-section {
      margin-bottom: 32px;
    }

    h3 {
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 500;
    }

    .button-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }
  `]
})
export class ExampleComponent {}
