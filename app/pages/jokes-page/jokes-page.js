import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@bbva-web-components/bbva-list-info';
import styles from './jokes-page-styles.js';

//Import components LALO
import 'joke-ui-lalo/jokes-ui'
import 'jokes-dm-lalo/jokes-dm'

class JokesPage extends CellsPage {
  static get is() {
    return 'jokes-page';
  }

  constructor() {
    super();
    this.jokes = [];
  }

  _getJokes(e) {
    this.jokes = e.detail.map((jk) => jk.joke);
    this.requestUpdate();
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            text="Made with ❤️ by Cells Team"
            icon-left-primary="coronita:return-12"
            accessibility-text-icon-left-primary="Volver"
            @header-main-icon-left-primary-click=${() => window.history.back()}>
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">
          <jokes-dm
            @jokes-dm-success="${this._getJokes}"
          ></jokes-dm>
            <h1>JOKES</h1>
            ${this.jokes.map((j) => {
              return html`
                <jokes-ui hide-title jokes=${JSON.stringify([j])}></jokes-ui>
              `;
            })}
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [ styles ];
  }
}

window.customElements.define(JokesPage.is, JokesPage);