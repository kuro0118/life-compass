import React, { useContext, useRef } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { useForm, Controller } from 'react-hook-form'
import {
    CheckBoxArea,
    FormInputMailAddress,
    FormInputPassword,
    HeaderText,
    LoginButton,
    LoginContainer,
    LoginFooter,
    LoginFormCotainer,
} from "../style/login/Login";

import {
    LABEL_HEADING,
    LABEL_LOGIN
} from "../const/CommonConst";

import { LoginFormLogo } from "../style/common/Logo";

const Login = ({ history }) => {

    const ref = useRef()
    const { login } = useContext(AuthContext);
    const { register, handleSubmit, control, watch, reset, errors, getValues } = useForm()
    console.log(ref);

    // AuthContextからlogin関数を受け取る
    const onSubmitAction = data => {
        // chips:preventDefault()を使用すると、イベント時の規定動作を防止することが出来る。
        //       この処理で言えばクリックする時にフォーカスが当たらなくなる。
        console.log(data);
        // event.preventDefault();
        // const { email, password } = event.target.elements;
        // login(email.value, password.value, history);
    };

    const handleChange = event => {
        console.log(event.target.value)
    };

    const onTestAction = () => {
        console.log("test");
    }

    // chips: placeholder属性を指定すると、その値がフィールドの初期値として設定される。
    return (
        <>
            <LoginContainer>
                <LoginFormCotainer>
                    <LoginFormLogo />
                    <HeaderText>{LABEL_HEADING}</HeaderText>
                    <form onSubmit={handleSubmit(onSubmitAction)}>
                        <Controller
                            name="mailAddress"
                            control={control}
                            rules={{ required: false }}
                            render={() => <FormInputMailAddress inputRef={ref} onChange={handleChange} />}
                        >
                        </Controller>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: false }}
                            render={() => <FormInputPassword inputRef={ref} onChange={handleChange} />}
                        >
                        </Controller>
                        <CheckBoxArea />
                        <LoginButton type="submit" >
                            {LABEL_LOGIN}
                        </LoginButton>
                    </form>
                    <LoginFooter onClick={onTestAction} />
                </LoginFormCotainer>
            </LoginContainer>
        </>
    );
};

export default withRouter(Login);