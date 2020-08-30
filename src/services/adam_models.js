import { http } from './config'

export default {
    models:() => {
        return http.get('models')
    },
    model_training:(parameters) => {
        return http.post('model_training', parameters)
    },
    delete_model:(model) => {
        return http.post('delete_model', model)
    }
}