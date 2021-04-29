import { createMuiTheme } from "@material-ui/core/styles";

const loadTheme = () => {
    return  createMuiTheme({
        palette: {
            type: 'light',
            // ヘッダー、フッター
            primary: {
                main: '#1597BB'
            },
            // タブ, リンクの色
            secondary: {
                main: '#1890ff'
            },
            // 非活性テキスト、境界
            third: {
                main: '#aeaaaa'
            },
            // ボディテキスト
            body: {
                main: '#194350'
            },
            // メンションのマウスオーバー背景
            mention_hover: {
                main: '#C7F1DD'
            }
        },
    });
}

export default loadTheme