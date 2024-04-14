/* eslint-disable @typescript-eslint/no-var-requires  */
/* eslint-disable @typescript-eslint/no-unused-vars  */
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic Design category?',
        choices: ['organisms', 'templates', 'providers'],
      },
      {
        type: 'input',
        name: 'provider_name',
        message: 'What is the name of provider?',
        validate: (input) =>
          typeof input === 'string' && /[A-Z].+Provider$/.test(input),
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (No problem in blank)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, provider_name, dir } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${provider_name}`;
      const abs_path =
        category === 'providers' ? `src/${path}` : `src/components/${path}`;
      const type_annotate = `React.FC<${provider_name}Props>`;
      return { ...answers, path, abs_path, type_annotate };
    });
  },
};
