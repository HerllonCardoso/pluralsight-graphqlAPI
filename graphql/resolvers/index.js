const queryResolver = require('./query.resolver');
const sessionResolver = require('./session.resolver');
const mutation = require('./mutation');


module.exports = [sessionResolver, queryResolver, mutation ];
