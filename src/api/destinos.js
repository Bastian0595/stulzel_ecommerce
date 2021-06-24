import { basePath } from './config';


export function getDestinos() {
    const url = `${basePath}/destino`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, params)
        .then(resp => {
            return resp.json();
        }).then(result => {
            return result;
        }).catch(err => {
            return err.message;
        });
}

export function postCotizar( data ) {
    console.log(data);
    const url = `https://www.anyda.xyz/tarifa`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        mode: 'cors'
    };
    return fetch(url, params)
        .then(resp => {
            return resp.json();
        }).then(result => {
            return result;
        }).catch(err => {
            return err.message;
        });
}