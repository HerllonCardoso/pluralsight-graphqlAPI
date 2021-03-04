module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
    speakers: (parent, args, {dataSources}, info) => {
      return dataSources.speakersAPI.getSpeakers();
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
      return dataSources.speakersAPI.getSpeakerById(id);
    },
  },
};
