import axios from '../request'

export default {
  test: (params) => axios.GET('/ea-elective-course-backend/student/getActivityList', params),
  // download: (params) => axios.GET('/ea-elective-course-backend/course/exp
  // ort?type=courseList&activityId=1000000000000920024', params, { responseType: 'blob' }),
}
