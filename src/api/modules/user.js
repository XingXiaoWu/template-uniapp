import axios from '../request'

export default {
  test: (params) => axios.GET('/ea-elective-course-backend/activity/list', params),
}
