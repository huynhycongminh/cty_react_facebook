import React from "react";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import "./Login.scss";
export default function Login() {
  return (
    <div className="main">
      <div className="contentLeft">
        <h1 className="logo">facebook</h1>
        <p className="slogan">
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn
        </p>
      </div>
      <FormControl className="contentRight">
      <TextField id="outlined-basic" label="Email hoặc số điện thoại" variant="outlined" className="txt"/> <br/>
      <TextField id="outlined-basic" label="mật khẩu"  className="txt"/> <br/>
      <Button variant="contained" className="login_btn">Đăng nhập</Button>
        <div className="link">
        <a href="/" className="linkForgotPassword">Quên mật khẩu?</a>
        </div>
        <div className="create_btn">
        <a href="/" className="create_btnAcount">Tạo tài khoản mới</a>
        </div>
      </FormControl>
      <div className="sloganRight">
      <a href="/" className="newPage">Tạo Trang </a>
        dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp
      </div>
    </div>
  );
}
