const common = `
--require build/support/hooks.js 
--require build/steps/**/*.js
`;

module.exports = {
    default: `${common} build/features/**/*.feature`,
};
