import { apply, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// This function will be called when the user runs `ng add <your-package-name>`
export function ngAdd(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Installing necessary packages...');
    _context.addTask(new NodePackageInstallTask());
    return addDesignSystemFileInSourceDir(tree, _context);
  }
}

function addDesignSystemFileInSourceDir(tree: Tree, context: SchematicContext) {
  context.logger.info('Adding design system files to your project...');
  const sourceFile = apply(
    url('./files'),
    [move('src')]
  );
  return mergeWith(sourceFile)(tree, context);
}

