import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form id="login-form" action="#" method="post" @submit=${onSubmit}>
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;


export function renderLogin(ctx) {

    const onSubmitHandler = (e) => {

        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let username = formData.get('username').trim();
        let password = formData.get('password').trim();
        if(username == '' || password == '') {
            alert('Please insert username and passowrd!');
            return;
        }  

        authService.login(username, password)
            .then(() => {
                ctx.page.redirect('/catalog');
            });
    }

    ctx.render(loginTemplate(onSubmitHandler));
}