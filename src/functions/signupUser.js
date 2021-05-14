import { auth } from "../../src/plugins/firabase";

const signupUser = async (email, password, history) => {
    // 新しいユーザーを作成しログインさせる関数
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        history.push("/");
    } catch (error) {
        alert(error);
    }
}

export default signupUser