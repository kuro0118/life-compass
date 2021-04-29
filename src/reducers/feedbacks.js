import {
    CREATE_EVENT,
    DELETE_EVENT,
    REPLY_EVENT,
    FIX_EVENT,
    REACTION_LAUGH_EVENT,
    REACTION_SORRY_EVENT,
    REACTION_GOOD_EVENT,
} from '../actions/profile';
import _ from 'lodash';
import updateStateForReaction from '../functions/updateState';
import findMentions from '../functions/findMentions';

const feedbacks = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            console.log(state)

            var targetNumber = action.number;
            var mentions = [{
                number: '001',
                branchNumber: '001',
                userName: action.userName,
                avator: action.avator,
                receiveDate: action.receiveDate,
                comment: action.comment,
                reactionLaugh: '',
                reactionSorry: '',
                reactionGood: ''
            }]

            if (state.length) {
                // numberの最大値を取得し、インクリメントする
                const maxNumber = Math.max(...state.map((p) => p.number))
                targetNumber = ('000' + (maxNumber + 1)).slice(-3)
                mentions[0].number = targetNumber
            }

            return _.sortBy([...state, { number: targetNumber, mention: mentions }], 'number')
        case DELETE_EVENT:
            // 対象のメンションを検索する
            var mentions = findMentions(
                state,
                action.number,
                action.branchNumber
            ).mentions

            console.log(mentions);

            var newMentions = mentions.filter(event => event.branchNumber !== action.branchNumber)
            var newState = state.filter(event => event.number !== action.number)
            return _.sortBy([...newState, { number: action.number, mention: newMentions }], 'number')
        case REPLY_EVENT:
            console.log(action.number);

            var targetNumber = action.number;

            var mentions = [{
                number: targetNumber,
                branchNumber: '',
                userName: action.userName,
                avator: action.avator,
                receiveDate: action.receiveDate,
                comment: action.comment,
                reactionLaugh: '',
                reactionSorry: '',
                reactionGood: ''
            }]

            // numberを条件に指定の明細を取得
            var target_mentions = state.find(({ number }) => number === targetNumber).mention
            // 明細の中から枝番が最大のものを取り出す
            var maxBranchNumber = Math.max(target_mentions.map((p) => p.branchNumber))
            mentions[0].branchNumber = ('000' + (maxBranchNumber + 1)).slice(-3)

            target_mentions = [...target_mentions, mentions[0]]

            var newState = state.filter(event => event.number !== targetNumber)

            return _.sortBy([...newState, { number: targetNumber, mention: target_mentions }], 'number')
        case FIX_EVENT:
            return state.filter(event => event.number !== action.number)
        case REACTION_LAUGH_EVENT:
            // リアクション更新共通処理
            return updateStateForReaction(
                state,
                action.number,
                action.branchNumber,
                REACTION_LAUGH_EVENT,
                { reaction: action.reactionLaugh }
            )
        case REACTION_SORRY_EVENT:
            return updateStateForReaction(
                state,
                action.number,
                action.branchNumber,
                REACTION_SORRY_EVENT,
                { reaction: action.reactionSorry }
            )
        case REACTION_GOOD_EVENT:
            return updateStateForReaction(
                state,
                action.number,
                action.branchNumber,
                REACTION_GOOD_EVENT,
                { reaction: action.reactionGood }
            )
        default:
            return state
    }
}

export default feedbacks
