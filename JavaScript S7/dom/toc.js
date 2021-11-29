let list = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
let def = 0;
let str = "";
const body = document.querySelector('body');

body.insertAdjacentHTML('beforebegin', toc(1,1,1));

function toc(nextHValue, list, i) {
    return `
            <ol>
                <li>
                    Titre 1
                    <ol>
                        <li>Titre 1.A</li>
                        <li>
                            Titre 1.B
                            <ol>
                                <li>Titre 1.B.i</li>
                                <li>Titre 1.B.ii</li>
                                <li>Titre 1.B.iii</li>
                            </ol>
                        </li>
                        <li>Titre 1.C</li>
                    </ol>
                </li>
            </ol>
            `;
}
