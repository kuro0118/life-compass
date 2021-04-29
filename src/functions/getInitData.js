import joon from '../images/joon.png'
import kokoro from '../images/kokoro.png'
import okina from '../images/okina.png'
import _ from 'lodash';
import getToday from './getToday';

const getInitData = () => {

    const createData = (number, branchNumber, userName, avator, receiveDate, comment, reactionLaugh, reactionSorry, reactionGood) => {
        const meisaiData = {
            number: number,
            branchNumber: branchNumber,
            userName: userName,
            avator: avator,
            receiveDate: receiveDate,
            comment: comment,
            reactionLaugh: reactionLaugh,
            reactionSorry: reactionSorry,
            reactionGood: reactionGood
        }
        return meisaiData
    }

    const meisaiRows = [
        createData('001', '001', 'じょおん', joon, getToday(), '初めまして！じょおんと申します。\nコメントさせていただきます。'
            , 0, 0, 0),
        createData('001', '002', 'こころ', kokoro, getToday(), '初めまして！コメントありがとうございます。\r\n理由はhogehogeかなと思っております。'
            , 0, 0, 0),
        createData('001', '003', 'じょおん', joon, getToday(), '返事ありがとうございます。\r\nなるほど、理解しました。ありがとうございます！'
            , 1, 0, 0),
        createData('002', '001', 'おきな', okina, getToday(), '初めまして！おきなと申します。\r\nコメントさせていただきます。'
            , 0, 0, 0),
        createData('001', '007', 'じょおん', joon, getToday(), '返事ありがとうございます。\r\nなるほど、理解しました。ありがとうございます！'
            , 0, 1, 1),
    ];

    const groupByMeisaiNumber = (objectArray, property) => {
        let result = _(objectArray)
            .groupBy(property)
            .map((items, number) => {
                return {
                    number: number,
                    mention: items
                }
            }).value()
        
        result = _.sortBy(result, property)
        return result
    }

    return groupByMeisaiNumber(meisaiRows, 'number');
}

export default getInitData;