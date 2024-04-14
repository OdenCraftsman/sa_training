/* eslint-disable @typescript-eslint/no-var-requires  */
/* eslint-disable @typescript-eslint/no-unused-vars  */
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic Design category?',
        choices: ['molecules', 'organisms', 'templates', 'hooks'],
      },
      {
        type: 'input',
        name: 'hooks_name',
        message: 'What is the name of hooks?(ex: useHooks)',
        validate: (input) =>
          typeof input === 'string' && /^use[A-Z].+$/.test(input),
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, dir } = answers;
      const path = `${category}${dir ? `/${dir}` : ``}`;
      const abs_path =
        category === 'hooks' ? `src/${path}` : `src/components/${path}`;
      return { ...answers, abs_path };
    });
  },
};
