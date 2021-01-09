// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
            this is your ReadME outline
            Description, 
            ${data.username}
            Table of Contents, 
            ${data.password}
            Installation, 
            ${data.confirm}
            Usage, 
            License, 
            Contributing, 
            Tests
            Questions
`;
}

module.exports = generateMarkdown;
