const URL = 'https://rocky-island-84837.herokuapp.com'

export async function getToken(login, type) {
    const authURL = `${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
    });
    const data = await resp.json();
    localStorage.setItem('Token', data.token);
    return data.token;
}

export async function getZoos(token){
    const userZoos = `${URL}/api/zoos`
    const resp = await fetch (userZoos, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        Authorization:
            token,
        },
    });
    const data = await resp.json();
    return data;
};

export async function creatZoo(token, todo){
    const zoosUrl = `${URL}/api/zoos`;
    const resp = await fetch(zoosUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        }
    })
}