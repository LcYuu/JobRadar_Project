import { GET_ALL_JOB_FAILURE, GET_ALL_JOB_REQUEST, GET_ALL_JOB_SUCCESS } from "./jobPost.actionType"

const initialState = {
    post: null, // Bài đăng công việc hiện tại
    loading: false, // Trạng thái tải
    error: null, // Lỗi nếu có
    jobPost: [], // Mảng lưu trữ các bài đăng công việc
    approve: false // Trạng thái phê duyệt công việc
}

export const jobPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_JOB_REQUEST:
            return { ...state, error: null, loading: false }
        case GET_ALL_JOB_SUCCESS:
        case GET_ALL_JOB_FAILURE:
        // case CREATE_POST_REQUEST:
        // case GET_ALL_POST_REQUEST:
        // case LIKE_POST_REQUEST:
        //     return { ...state, error: null, loading: false }

        case GET_ALL_JOB_SUCCESS:
            return { 
                ...state, 
                jobPost: action.payload, // Lưu trữ tất cả các công việc vào mảng jobPost
                loading: false, 
                error: null 
            }
        // case GET_ALL_POST_SUCCESS:
        //     return {
        //         ...state,
        //         jobPost: action.payload,
        //         comments: action.payload.comment,
        //         loading: false,
        //         error: null
        //     }
        // case GET_USERS_POST_SUCCESS: // Thêm case này
        //     return {
        //         ...state,
        //         jobPost: action.payload,
        //         loading: false,
        //         error: null
        //     }
        // case LIKE_POST_SUCCESS:
        //     return {
        //         ...state,
        //         like: action.payload,
        //         jobPost: state.jobPost.map((item) => item.post_id === action.payload.post_id ? action.payload : item),
        //         loading: false,
        //         error: null
        //     }
        // case CREATE_COMMENT_SUCCESS:
        //     return {
        //         ...state,
        //         newComment: action.payload,
        //         loading: false,
        //         error: null
        //     }
        // case CREATE_POST_FAILURE:
        // case GET_ALL_POST_FAILURE:
        // case GET_USERS_POST_FAILURE:
        //     return {
        //         ...state, error: action.payload,
        //         loading: false
        //     }
        default:
            return state
    }
}