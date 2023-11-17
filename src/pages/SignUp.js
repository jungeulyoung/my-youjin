import React, { useState } from "react";
import axios from "axios";

function SignUp() {


    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

const getCall = async () => {
    await axios.get('http://localhost:8080/user/hello')
}
    const regist = async () => {
        try {
            // console.log();
            const response = await axios.post(
                'http://localhost:8080/user/join',
                {
                    userId: userId,
                    password: password
                }
            );
            console.log('회원가입 성공', response.data, response.status);
        } catch (error) {
            console.error('회원가입 오류:', error.message);
        }
    }

    return (
        <div>

            <form name="userinfo">
                <h2>회원가입 페이지 입닏!</h2>
                <label>
                    아이디:
                    <input id="userId" name="userId" onChange={(e) => setUserId(e.target.value)} value={userId} />
                </label>
                <label>
                    비밀번호:
                    <input id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </label>
                <button type="button" onClick={regist} >
                    가입하기
                </button>

            </form>
            {/* <input onClick={getCall} value={"button"}></input> */}
        </div>
    )
}
export default SignUp;