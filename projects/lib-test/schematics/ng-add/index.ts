import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { apply, url, move, mergeWith, template } from '@angular-devkit/schematics';
import { SchemaModel } from './schema.model';

export function ngAdd(options: SchemaModel): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Instalando pacotes necessários...');
    context.addTask(new NodePackageInstallTask());

    const rules: Rule[] = [];

    if (
      options.designSystemType === 'default' ||
      options.useDefaultDesignSystem
    ) {
      context.logger.info('Configurando design system padrão...');
      rules.push(addDesignSystemFileInSourceDir());
      rules.push(addImportToStylesScss('./design-system.scss'));
    } else {
      context.logger.info('Pulando configuração do design system...');
    }

    return chain(rules)(tree, context);
  };
}

function addDesignSystemFileInSourceDir(): Rule {
  return mergeWith(
    apply(url('./files'), [
      template({}),
      move('src')
    ])
  );
}

function addImportToStylesScss(fileName: string): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const stylesPath = 'src/styles.scss';
    const importStatement = `@import '${fileName}';\n`;

    if (tree.exists(stylesPath)) {
      const content = tree.read(stylesPath)?.toString('utf-8') || '';
      if (!content.includes(importStatement.trim())) {
        const updated = importStatement + content;
        tree.overwrite(stylesPath, updated);
        context.logger.info(`Adicionado @import '${fileName}' ao styles.scss`);
      }
    } else {
      tree.create(stylesPath, importStatement);
      context.logger.info(`Criado styles.scss com @import '${fileName}'`);
    }
    return tree;
  };
}

