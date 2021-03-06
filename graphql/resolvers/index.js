const queryResolver = require('./query.resolver');
const sessionResolver = require('./session.resolver');

module.exports = [sessionResolver, queryResolver ];
