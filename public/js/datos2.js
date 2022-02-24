const $template = document.getElementById('tabla-template').content;
const $fragment = document.createDocumentFragment();
const $table = document.querySelector('.table');

const $loader = document.getElementById('loader');

const getAll = async () => {

    try {

        let res = await fetch('http://localhost:3000/mediocampistas');
        let data = await res.json();

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        data.forEach((el) => {

            $template.querySelector('.nombre').textContent = el.nombre;
            $template.querySelector('.pais').textContent = el.pais;

            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);

        })

        $table.querySelector('tbody').appendChild($fragment);
        
    } catch (error) {

        $loader.classList.add('quit');
        let message = error.statusText || 'Data not found';

        let div = `
            <div class="alert alert-danger" role="alert">
                Error ${error.status}: ${message}
            </div>
        `;
        $table.insertAdjacentHTML("afterend", div);
    } finally {
        $loader.classList.add('quit');
    }

}

document.addEventListener('DOMContentLoaded', getAll);