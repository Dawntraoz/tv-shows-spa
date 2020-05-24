import api from '.'

const END_POINT = '/shows'

// Get All Shows
const getAllShows = () => api.get(END_POINT, { useCahe: true })

// Get Show details
const getShow = show_id => api.get(END_POINT + '/' + show_id)

// Get Show images
const getShowImages = show_id => api.get(END_POINT + '/' + show_id + '/images')

export { getAllShows, getShow, getShowImages }
