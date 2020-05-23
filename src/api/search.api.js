import api from ".";

const END_POINT = "/search/shows";

// Get Show details
const getSearchShows = query => api.get(END_POINT, { q: query });

export { getSearchShows };
