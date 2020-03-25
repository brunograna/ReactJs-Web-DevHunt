import React, {useState} from 'react';
import './global.css';
import './Sidebar.css';
import './Main.css'
import './App.css';

import Header from './Header';
// Tres conceitos
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que o componente PAI passa para o componente filho
// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input type="text" name="github_username" id="github_username" required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input type="text" name="techs" id="techs" required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="link_github">Link do github</label>
                        <input type="text" name="link_github" id="link_github" required />
                    </div>
                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" name="latitude" id="latitude" required />
                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" name="longitude" id="longitude" required />
                        </div>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/41070501?s=460&u=32770585e48879a0900b6d38d7f85949c5543a2e&v=4" alt=""/>
                            <div className="user-info">
                                <strong>Bruno Garcia</strong>
                                <span>ReactJS, Java</span>
                            </div>
                        </header>
                        <p>Desenvolvedor de Software</p>
                        <a href="https://github.com/brunograna">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/41070501?s=460&u=32770585e48879a0900b6d38d7f85949c5543a2e&v=4" alt=""/>
                            <div className="user-info">
                                <strong>Bruno Garcia</strong>
                                <span>ReactJS, Java</span>
                            </div>
                        </header>
                        <p>Desenvolvedor de Software</p>
                        <a href="https://github.com/brunograna">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/41070501?s=460&u=32770585e48879a0900b6d38d7f85949c5543a2e&v=4" alt=""/>
                            <div className="user-info">
                                <strong>Bruno Garcia</strong>
                                <span>ReactJS, Java</span>
                            </div>
                        </header>
                        <p>Desenvolvedor de Software</p>
                        <a href="https://github.com/brunograna">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/41070501?s=460&u=32770585e48879a0900b6d38d7f85949c5543a2e&v=4" alt=""/>
                            <div className="user-info">
                                <strong>Bruno Garcia</strong>
                                <span>ReactJS, Java</span>
                            </div>
                        </header>
                        <p>Desenvolvedor de Software</p>
                        <a href="https://github.com/brunograna">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
