const findMentions = (state, targetNumber, targetBranchNumber) => {

    // 対象のメンションを検索する
    var mentions = state.find(({ number }) => number === targetNumber).mention
    var mention = mentions.find(({ branchNumber }) => branchNumber === targetBranchNumber)
    return {mentions, mention}
}

export default findMentions;