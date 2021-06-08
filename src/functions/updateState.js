import {
    REACTION_LAUGH_EVENT,
    REACTION_SORRY_EVENT,
    REACTION_GOOD_EVENT,
} from '../actions/profile';
import _ from 'lodash';

const updateStateForReaction = (state, targetNumber, targetBranchNumber, updateType, updateParam) => {

    // 対象のメンションを検索する
    var target_mentions = state.find(({ number }) => number === targetNumber).mention
    var target_mention = target_mentions.find(({ branchNumber }) => branchNumber === targetBranchNumber)

    // リアクションを設定
    switch (updateType) {
        case REACTION_LAUGH_EVENT:
            target_mention.reactionLaugh = updateParam.reaction
            break
        case REACTION_GOOD_EVENT:
            target_mention.reactionGood = updateParam.reaction
            break
        case REACTION_SORRY_EVENT:
            target_mention.reactionSorry = updateParam.reaction
            break
        default:
            break
    }

    // メンショングループを更新する
    target_mentions = target_mentions.filter(event => event.branchNumber !== targetBranchNumber)
    target_mentions = [...target_mentions, target_mention]
    target_mentions = _.sortBy(target_mentions, 'branchNumber')

    // ステートを更新
    var newState = state.filter(event => event.number !== targetNumber)
    return _.sortBy([...newState, { number: targetNumber, mention: target_mentions }], 'number')
}

export default updateStateForReaction;