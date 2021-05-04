import _ from 'lodash';
import getToday from './getToday';
import createState from './createState';
import { 
    PATH_AVATOR_ME,
    PATH_AVATOR_VISITOR1,
    PATH_AVATOR_VISITOR2
 } from '../const/CommonConst'
import getRelativePath from './getRelativePath';

const getInitData = () => {

    const myAvator = getRelativePath(__dirname, PATH_AVATOR_ME)
    const visitor1Avator = getRelativePath(__dirname, PATH_AVATOR_VISITOR1)
    const visitor2Avator = getRelativePath(__dirname, PATH_AVATOR_VISITOR2)

    const meisaiRows = [
        createState('001', '001', 'joon', 'じょおん', visitor1Avator, getToday(), '初めまして！じょおんと申します。\nコメントさせていただきます。'
            , 0, 0, 0),
        createState('001', '002', 'kokoro', 'こころ', myAvator, getToday(), '初めまして！コメントありがとうございます。\r\n理由はhogehogeかなと思っております。'
            , 0, 0, 0),
        createState('001', '003', 'joon', 'じょおん', visitor1Avator, getToday(), '返事ありがとうございます。\r\nなるほど、理解しました。ありがとうございます！'
            , 1, 0, 0),
        createState('002', '001', 'okina', 'おきな', visitor2Avator, getToday(), '初めまして！おきなと申します。\r\nコメントさせていただきます。'
            , 0, 0, 0),
        createState('001', '007', 'joon', 'じょおん', visitor1Avator, getToday(), '返事ありがとうございます。\r\nなるほど、理解しました。ありがとうございます！'
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