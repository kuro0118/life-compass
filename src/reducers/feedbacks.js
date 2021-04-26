import {
    CREATE_EVENT,
    DELETE_EVENT,
    REPLY_EVENT,
    FIX_EVENT,
} from '../actions/profile';

const feedbacks = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            console.log(state);
            const feedbackData = {
                userName: action.userName,
                avator: action.avator,
                receiveDate: action.receiveDate,
                comment: action.comment
            }

            let number = '001'

            if (state.length) {
                // numberの最大値を取得し、インクリメントする
                const maxNumber = Math.max(...state.map((p) => p.number))
                number = (maxNumber + 1).slice(-3)
            } 

            const branchNumber = '001'

            return [...state, { number, branchNumber, ...feedbackData }]
        case DELETE_EVENT:
            return state.filter(event => event.number !== action.number && event.branchNumber !== action.branchNumber)
        case REPLY_EVENT:
            console.log(state);
            feedbackData = {
                number: action.number,
                userName: action.userName,
                avator: action.avator,
                receiveDate: action.receiveDate,
                comment: action.comment
            }

            // numberを条件に指定の明細を取得
            const meisai = state.find(({number}) => number === action.number)
            branchNumber = (meisai.branchNumber + 1).slice(-3)

            return [...state, { branchNumber, ...feedbackData }]
        case FIX_EVENT:
            return state.filter(event => event.number !== action.number)
        default:
            return state
    }
}

export default feedbacks
