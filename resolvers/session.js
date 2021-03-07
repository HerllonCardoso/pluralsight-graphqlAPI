const _ = require('lodash');

module.exports = {
  speakers: async (session, args, { dataSources }, info) => {
    const speakers = await dataSources.speakerAPI.getSpeakers();
    const returns = speakers.filter((speaker) => {
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });
    return returns;
  },
};
