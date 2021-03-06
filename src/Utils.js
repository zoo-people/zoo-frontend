require('dotenv').config();
const URL = 'https://rocky-island-84837.herokuapp.com'
// const URL = 'http://localhost:7890';



export async function setProfilePic() {
    const apiResp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_KEY}&tag=animal&rating=g
    `);
    const results  = await apiResp.json();
    localStorage.setItem('USERPIC', results.data.image_url)
  }

export async function getToken(login, type) {
    await setProfilePic();
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
// get profile pics for user
export function getProfilePic() {
 return localStorage.getItem('USERPIC');
  
}

export async function getHabitats(token) {
    const url = `${URL}/api/habitats`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'Authorization': token,
        },
    });
    const data = await resp.json();
    return data;
}


export async function getAnimalsByHabitat(token, hab_id) {
    const url = `${URL}/api/animals/${hab_id}`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'Authorization': token,
        },
        // body: JSON.stringify(hab_data)
    });
    const data = await resp.json();
    return data;
}

export async function getZoos(token) {
    const url = `${URL}/api/zoos`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'Authorization': token,
        },
        // body: JSON.stringify(hab_data)
    });
    const data = await resp.json();
    return data;
}

export async function postZoo(token, object) {
    const zooURL = `${URL}/api/zoos`;
    const resp = await fetch(zooURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
            
        },
        body: JSON.stringify(object),
    });
    const data = await resp.json();
    return data.token;
}

export async function deleteAnimal(token, obj) {
    const zooURL = `${URL}/api/zoos/${obj.animal_id}`;
    const resp = await fetch (zooURL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    return data.token;
}

