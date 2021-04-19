import http from './http'

const getAllTeammates = () => {
    return http.get('/collaborator')
}
const getTeammateByID = id => {
    return http.get(`/collaborator/${id}`)
}
const getAllTeammateFeedbacks = id => {
    return http.get(`/collaborator/${id}/feedback`)
}
const createFeedback = (id, data) => {
    return http.post(`/collaborator/${id}/feedback`, data)
}
const removeFeedback = (id, feedbackId) => {
    return http.delete(`/collaborator/${id}/feedback/${feedbackId}`)
}
const addFeedbackLike = (id, feedbackId, data) => {
    return http.put(`/collaborator/${id}/feedback/${feedbackId}`, data)
}
const TeammatesService = {
    getAllTeammates,
    getTeammateByID,
    getAllTeammateFeedbacks,
    createFeedback,
    removeFeedback,
    addFeedbackLike
}

export default TeammatesService