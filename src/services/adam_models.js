import { http } from './config'

export default {
    all_models:() => {
        return http.get('models')
    }
}