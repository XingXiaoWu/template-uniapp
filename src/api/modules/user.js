import axios from '../request'

export default {
  text: (params) => axios.GET('/ecp.sso.backend/sso/login', params),
}
