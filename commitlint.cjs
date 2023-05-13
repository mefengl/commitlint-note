const lint = require('@commitlint/lint').default;
const load= require('@commitlint/load').default;
const format = require('@commitlint/format').default;

async function runCommitlint() {
  const commitMessage = 'Your commit message here'; // Replace this with your actual commit message
  const options = await load({
    extends: ['@commitlint/config-conventional'],
  });
  const report = await lint(commitMessage, options.rules, options.parserPreset);
	const formattedReport = format({results:[report]});
	console.log(formattedReport);
}

runCommitlint().catch((error) => {
  console.error('Error occurred:', error);
  process.exit(1);
});
