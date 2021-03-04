const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args)
  }

  getSessionsById() {
    const session = _.filter(session, { id: parseInt(id) });
    return session[0];
  }
}

module.exports = SessionAPI;
