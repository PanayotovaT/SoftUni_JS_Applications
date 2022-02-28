import { html } from '../../node_modules/lit-html/lit-html.js';
import {getMyFurniture} from '../data.js';
import {itemTemplate} from './common/item.js';
import {until} from '../../node_modules/lit-html/directives/until.js';

const myTemplate = (data) => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(itemTemplate)}
        </div>`;
export async function myFurniture(ctx) {
    const data = await getMyFurniture();
    ctx.render(until(populateTemplate(), 'Loading...'));

    async function populateTemplate() {
        const data = await getMyFurniture();
        return myTemplate(data);
    }
}