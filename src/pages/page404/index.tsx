export default function Page404() {
    return (
        <div style={{ height: 'calc(100vh - 300px)', color: 'var(--text-color)', background: 'var(--background-color)', display: 'flex' }}>
            <div style={{ margin: '50px auto', }}>
                <h2>404: Ops, a página que você esta procurando não foi encontrada :(</h2>
                <a href="/">
                    <button style={{ borderRadius: '50px', padding: '10px 20px', background: 'var(--text-color-blue-green)', marginTop: '20px' }}>
                        <strong >Voltar para a home</strong>
                    </button>
                </a>
            </div>

        </div>
    )
}
