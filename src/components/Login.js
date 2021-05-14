import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = ({ history }) => {

    const { login } = useContext(AuthContext);

    // AuthContextからlogin関数を受け取る
    const handleSubmit = event => {
        // chips:preventDefault()を使用すると、イベント時の規定動作を防止することが出来る。
        //       この処理で言えばクリックする時にフォーカスが当たらなくなる。
        event.preventDefault();
        const { email, password } = event.target.elements;
        login(email.value, password.value, history);
    };

    // chips: placeholder属性を指定すると、その値がフィールドの初期値として設定される。
    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
          <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
          <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(Login);