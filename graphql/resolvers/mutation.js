module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id);
  },
}