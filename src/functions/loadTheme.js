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
            // 非活性テキスト、境界、キャンセルボタン
            third: {
                main: '#aeaaaa'
            },
            // 決定ボタン、確定ボタン
            commit: {
                main: '#00698B'
            },
            // 決定・確定ボタンのマウスオーバー拝啓
            commit_hover: {
                main: '#00526C'
            },
            // キャンセルボタンのマウスオーバー拝啓
            cancel_hover: {
                main: '#918B8B'
            },
            // ボディテキスト
            body: {
                main: '#194350'
            },
            // メンションのマウスオーバー背景
            mention_hover: {
                main: '#C7F1DD'
            },
            // 白字
            white: {
                main: 'white'
            },
            // 画像編集モーダルの背景色
            crop_image: {
                main: '#66B3C2'
            },
            // プロフィール画面の背景色
            profile: {
                main: '#DBF6E9'
            },
            // ログイン画面の背景色
            login: {
                main: '#D1F0FF'
            }
        },
    });
}

export default loadTheme