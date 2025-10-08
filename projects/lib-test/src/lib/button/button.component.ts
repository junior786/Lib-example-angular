import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

/**
 * Componente de botão que utiliza Angular Material e respeita o tema da aplicação.
 *
 * Este componente é um wrapper do mat-button que aceita diferentes variantes
 * e automaticamente se adapta ao tema configurado na aplicação consumidora.
 */
@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    @if (variant === 'raised') {
      <button
        mat-raised-button
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    } @else if (variant === 'flat') {
      <button
        mat-flat-button
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    } @else if (variant === 'stroked') {
      <button
        mat-stroked-button
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    } @else if (variant === 'icon') {
      <button
        mat-icon-button
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    } @else if (variant === 'fab') {
      <button
        mat-fab
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    } @else if (variant === 'mini-fab') {
      <button
        mat-mini-fab
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    } @else {
      <button
        mat-button
        [color]="color"
        [disabled]="disabled"
        [type]="type">
        <ng-content></ng-content>
      </button>
    }
  `,
  styles: []
})
export class ButtonComponent {
  /**
   * Variante do botão Material Design
   * - 'basic': Botão básico sem elevação
   * - 'raised': Botão com elevação
   * - 'flat': Botão preenchido sem elevação
   * - 'stroked': Botão com borda
   * - 'icon': Botão de ícone
   * - 'fab': Floating Action Button
   * - 'mini-fab': Floating Action Button menor
   */
  @Input() variant: 'basic' | 'raised' | 'flat' | 'stroked' | 'icon' | 'fab' | 'mini-fab' = 'basic';

  /**
   * Cor do tema Material Design
   * - 'primary': Cor primária do tema
   * - 'accent': Cor de destaque do tema
   * - 'warn': Cor de aviso do tema
   */
  @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';

  /**
   * Desabilita o botão
   */
  @Input() disabled = false;

  /**
   * Tipo HTML do botão
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
