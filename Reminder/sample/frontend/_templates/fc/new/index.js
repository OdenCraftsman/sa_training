/* eslint-disable @typescript-eslint/no-var-requires  */
/* eslint-disable @typescript-eslint/no-unused-vars  */

module.exports = {
  prompt: async ({ inquirer }) => {
    return await (async () => {
      const { category, component_name, dir } = await inquirer.prompt([
        {
          type: 'select',
          name: 'category',
          message: 'Which Atomic Design category?',
          choices: ['atoms', 'molecules', 'organisms', 'templates'],
        },
        {
          type: 'input',
          name: 'component_name',
          message: 'What is the name of component?',
          validate: (input) => input !== '',
        },
        {
          type: 'input',
          name: 'dir',
          message: 'Where is the directory? (No problem in blank)',
        },
      ]);
      const is_root_templates = category === 'templates' && !dir;

      const { have_props } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'have_props',
          message: 'Is it have props?',
        },
      ]);

      return {
        category,
        component_name,
        dir,
        have_props,
        is_root_templates,
      };
    })().then((answers) => {
      const { category, component_name, dir, have_props } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const abs_path = `src/components/${path}`;
      const type_annotate = have_props
        ? `React.FC<${component_name}Props>`
        : 'React.FC';
      const props = have_props ? '(props)' : '()';
      return {
        ...answers,
        path,
        abs_path,
        type_annotate,
        props,
      };
    });
  },
};
