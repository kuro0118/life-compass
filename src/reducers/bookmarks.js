import {
    ADD_BOOKMARK_EVENT,
    DELETE_BOOKMARK_EVENT,
} from '../actions';

const bookmarks = (state = [], action) => {
    switch (action.type) {
        case ADD_BOOKMARK_EVENT:
            console.log(state);

            let number = '001'
            let branchNumber = '001'
            let workState = [...state]
            let bookmarkData = {
                userName: "",
                avator: "",
                receiveDate: "",
                comment: ""
            }

            action.map((el, index) => {

                bookmarkData.userName = el.userName
                bookmarkData.avator = el.avator
                bookmarkData.receiveDate = el.receiveDate
                bookmarkData.comment = el.comment

                if (state.length && index === 0) {
                    // numberの最大値を取得し、インクリメントする
                    let maxNumber = Math.max(...state.map((p) => p.number))
                    number = (maxNumber + 1).slice(-2)
                } else{
                    branchNumber = (branchNumber + 1).slice(-3)
                }
  
                workState = [...workState, { number, branchNumber, ...bookmarkData }]
            })

            return workState

        case DELETE_BOOKMARK_EVENT:
            return state.filter(event => event.number !== action.number)
        default:
            return state
    }
}

export default bookmarks
