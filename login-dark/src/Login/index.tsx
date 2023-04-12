export function Login() {
    return (
        <div className="login-container">
            <h1 className="login-titulo">Entrar no Sistema</h1>

            <form className="login-form">
                <input
                    type="text"
                    className="login-input"
                    placeholder="email@email.com"
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="senha"
                />
                <button
                    className="login-btn"
                    type="submit"
                > Entrar </button>
                <p className="login-texto">
                    <a  href="">Esqueceu a senha</a>
                </p>
            </form>

        </div>
    )
}