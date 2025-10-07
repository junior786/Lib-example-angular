import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { apply, url, move, mergeWith } from '@angular-devkit/schematics';
import { SchemaModel } from './schema.model';

export function ngAdd(options: SchemaModel): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Instalando pacotes necessários...');
    context.addTask(new NodePackageInstallTask());

    if (
      options.designSystemType === 'default' ||
      options.useDefaultDesignSystem
    ) {
      context.logger.info('Configurando design system padrão...');
      addDesignSystemFileInSourceDir(tree, context);
      addImportToStylesScss(tree, context, 'design-system.scss');
    }
    context.logger.info('Pulando configuração do design system...');
    return tree;
  };
}

function addDesignSystemFileInSourceDir(tree: Tree, context: SchematicContext) {
  const sourceFile = apply(url('./files/default'), [move('src')]);
  return mergeWith(sourceFile)(tree, context);
}

function addImportToStylesScss(
  tree: Tree,
  context: SchematicContext,
  fileName: string
) {
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
}

