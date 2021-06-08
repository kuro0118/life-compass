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
import createState from '../functions/createState';

const feedbacks = (state = [], action) => {

    switch (action.type) {
        case CREATE_EVENT:
            console.log(state)

            var targetNumber = action.number;

            var newMentions = [createState(
                '001',
                '001',
                action.userId,
                action.userName,
                action.avator,
                action.receiveDate,
                action.comment
            )]

            if (state.length) {
                // numberの最大値を取得し、インクリメントする
                const maxNumber = Math.max(...state.map((p) => p.number))
                targetNumber = ('000' + (maxNumber + 1)).slice(-3)
                newMentions[0].number = targetNumber
            }

            return _.sortBy([...state, { number: targetNumber, mention: newMentions }], 'number')
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

            var mentions = [createState(
                targetNumber,
                '',
                action.userId,
                action.userName,
                action.avator,
                action.receiveDate,
                action.comment
            )]

            // numberを条件に指定の明細を取得
            var target_mentions = state.find(({ number }) => number === targetNumber).mention
            // 明細の中から枝番が最大のものを取り出す
            // chips:target_mentionsはスプレッド演算子でないと、最大値が上手く取れない？
            var maxBranchNumber = Math.max(...target_mentions.map((p) => p.branchNumber))
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
