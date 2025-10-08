# Lib-Test

Biblioteca Angular com componentes e schematics para facilitar o desenvolvimento.

## Instalação

```bash
npm install lib-test
```

## Uso com ng add

Para adicionar a biblioteca ao seu projeto com configuração automática:

```bash
ng add lib-test
```

### Opções do ng add

Durante a instalação, você será questionado sobre:

1. **Design System**: Se deseja usar o design system padrão da biblioteca
2. **Componente de Exemplo**: Se deseja incluir um componente de exemplo no seu projeto

### O que o ng add faz?

- **Design System (opcional)**: Adiciona arquivos de estilo padrão em `src/design-system.scss` e `src/theme/`
- **Componente de Exemplo (opcional)**: Cria um componente de exemplo em `src/app/components/example.component.ts` demonstrando o uso da biblioteca

## Componentes Disponíveis

### ButtonComponent

Componente de botão que utiliza **Angular Material** e **respeita automaticamente o tema da aplicação**.

Este é um wrapper dos botões do Material Design que se adapta completamente ao tema configurado na sua aplicação (cores primary, accent, warn).

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from 'lib-test';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  template: `
    <!-- Botões básicos -->
    <lib-button variant="basic" color="primary">Basic</lib-button>
    <lib-button variant="raised" color="accent">Raised</lib-button>
    <lib-button variant="flat" color="warn">Flat</lib-button>
    <lib-button variant="stroked" color="primary">Stroked</lib-button>

    <!-- Botões com ícones -->
    <lib-button variant="icon" color="primary">
      <mat-icon>favorite</mat-icon>
    </lib-button>

    <!-- FAB -->
    <lib-button variant="fab" color="primary">
      <mat-icon>add</mat-icon>
    </lib-button>

    <!-- Desabilitado -->
    <lib-button variant="raised" color="primary" [disabled]="true">
      Disabled
    </lib-button>
  `
})
export class AppComponent {}
```

#### Propriedades

- `variant`: `'basic' | 'raised' | 'flat' | 'stroked' | 'icon' | 'fab' | 'mini-fab'` - Variante do botão Material Design (padrão: 'basic')
  - **basic**: Botão básico sem elevação
  - **raised**: Botão com elevação (sombra)
  - **flat**: Botão preenchido sem elevação
  - **stroked**: Botão com borda
  - **icon**: Botão de ícone
  - **fab**: Floating Action Button
  - **mini-fab**: Floating Action Button menor

- `color`: `'primary' | 'accent' | 'warn' | undefined` - Cor do tema Material Design (padrão: 'primary')
  - **primary**: Usa a cor primária do tema da aplicação
  - **accent**: Usa a cor de destaque do tema da aplicação
  - **warn**: Usa a cor de aviso do tema da aplicação

- `disabled`: `boolean` - Desabilita o botão (padrão: false)

- `type`: `'button' | 'submit' | 'reset'` - Tipo HTML do botão (padrão: 'button')

#### Como funciona o tema?

O componente utiliza as cores definidas no tema Material da sua aplicação. Se você configurou um tema customizado, os botões automaticamente usarão suas cores:

```scss
// Exemplo de tema customizado em styles.scss
@use '@angular/material' as mat;

$my-primary: mat.define-palette(mat.$indigo-palette);
$my-accent: mat.define-palette(mat.$pink-palette);
$my-warn: mat.define-palette(mat.$red-palette);

$my-theme: mat.define-light-theme((
  color: (
    primary: $my-primary,
    accent: $my-accent,
    warn: $my-warn,
  )
));

@include mat.all-component-themes($my-theme);
```

Os botões `lib-button` respeitarão automaticamente essas cores!

## Desenvolvimento

### Build da biblioteca

```bash
cd projects/lib-test
npm run build
```

### Estrutura de Arquivos

```
projects/lib-test/
├── src/
│   ├── lib/
│   │   ├── button/
│   │   │   └── button.component.ts
│   │   ├── lib-test.component.ts
│   │   └── lib-test.service.ts
│   └── public-api.ts
├── schematics/
│   ├── ng-add/
│   │   ├── files/
│   │   │   ├── components/
│   │   │   │   └── example.component.ts.template
│   │   │   └── design-system.scss
│   │   ├── index.ts
│   │   ├── schema.json
│   │   └── schema.model.ts
│   └── collection.json
└── package.json
```

## Versionamento

A biblioteca é compatível com Angular 17+. As dependências peer são:

- `@angular/common`: >=17.0.0
- `@angular/core`: >=17.0.0
- `@angular/material`: >=17.0.0

## Requisitos

Para usar esta biblioteca, sua aplicação precisa ter o **Angular Material** configurado. Se ainda não tiver:

```bash
ng add @angular/material
```

Isso irá configurar o Material Design na sua aplicação, incluindo o tema padrão.

## Publishing

After building your library with `npm run build`, go to the dist folder `cd ../../dist/lib-test` and run `npm publish`.

## Running unit tests

Run `ng test lib-test` to execute the unit tests via [Karma](https://karma-runner.github.io).
