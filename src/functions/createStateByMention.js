import initState from "./initState"

const createStateByMention = (
   mention
) => {
    let newState = initState();
    newState.number = mention.number ? mention.number : '000'
    newState.branchNumber = mention.branchNumber? mention.branchNumber : '000'
    newState.userId = mention.userId ? mention.userId : ""
    newState.userName = mention.userName ? mention.userName : ""
    newState.avator = mention.avator ? mention.avator : ""
    newState.receiveDate = mention.receiveDate ? mention.receiveDate : ""
    newState.comment = mention.comment ? mention.comment : ""
    newState.reactionLaugh = mention.reactionLaugh ? mention.reactionLaugh : 0
    newState.reactionSorry = mention.reactionSorry ? mention.reactionSorry : 0
    newState.reactionGood = mention.reactionGood ? mention.reactionGood : 0
    return newState
}

export default createStateByMention