import joon from '../images/joon.png'
import kokoro from '../images/kokoro.png'
import okina from '../images/okina.png'

const getInitData = () => {

    const createData = (number, branchNumber, avator, receiveDate, comment) => {
        const meisaiData = {
            number: number,
            branchNumber: branchNumber,
            avator: avator,
            receiveDate: receiveDate,
            comment: comment
        }
        return meisaiData
    }

    const meisaiRows = [
        createData('01', '01', joon, '2021-04-17 23:30:21', '初めまして！じょおんと申します。\nコメントさせていただきます。'),
        createData('01', '02', kokoro, '2021-04-17 23:42:21', '初めまして！コメントありがとうございます。\r\n理由はhogehogeかなと思っております。'),
        createData('01', '03', joon, '2021-04-17 23:45:21', '返事ありがとうございます。\r\nなるほど、理解しました。ありがとうございます！'),
        createData('02', '01', okina, '2021-04-17 23:25:21', '初めまして！おきなと申します。\r\nコメントさせていただきます。'),
    ];

    const groupByMeisaiNumber = (objectArray, property) => {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property]
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(obj)
            return acc
        }, {})
    }

    return groupByMeisaiNumber(meisaiRows, 'number');
}

export default getInitData;