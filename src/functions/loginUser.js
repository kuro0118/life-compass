import { auth } from "../../src/plugins/firabase";

const loginUser = async (email, password, history) => {
    // ユーザーをログインさせる関数
    try {
        await auth.signInWithEmailAndPassword(email, password);
        history.push("/");
    } catch (error) {
        alert(error);
    }
}

export default loginUser