import api from ".";

const END_POINT = "/search/shows?q=";

// Get Show details
const getSearchShows = query => api.get(END_POINT + query);

export { getSearchShows };
