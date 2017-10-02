module.exports = function generateId(options) {
    options = options || {};
    options.configuration = options.configuration || '8-4-4-11';

    const sequencesConfiguration = options.configuration.split('-');
    const blocks = sequencesConfiguration.map(qty => generateSequence(+qty));

    return blocks.join('-');
};

function generateSequence(number) {
    const symbols = '1234567890qwertyuiopasdfghjklzxcvbnm';
    const length = symbols.length;
    let result = '';

    for (let i = 0; i < number; i++) {
        const index = (Math.random() * length).toFixed(0) - 1;

        result += symbols[index];
    }

    return result;
}
