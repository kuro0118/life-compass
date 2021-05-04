import initState from "./initState"

const createState = (
    number,
    branchNumber,
    userId,
    userName,
    avator,
    receiveDate,
    comment,
    reactionLaugh,
    reactionSorry,
    reactionGood
) => {
    let newState = initState();
    newState.number = number
    newState.branchNumber = branchNumber
    newState.userId = userId
    newState.userName = userName
    newState.avator = avator
    newState.receiveDate = receiveDate
    newState.comment = comment
    newState.reactionLaugh = reactionLaugh ? reactionLaugh : 0
    newState.reactionSorry = reactionSorry ? reactionSorry : 0
    newState.reactionGood = reactionGood ? reactionGood : 0
    return newState
}

export default createState