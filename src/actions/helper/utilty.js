// get user login data
function userData() {
    const user = getItem('token');
    if (user) return user
}

// set item on local storage web browser
const setItem = (title, data) => {
    localStorage.setItem(title, JSON.stringify(data))
}

// get item on local storage web browser
const getItem = (title) => {
    const data = localStorage.getItem(title)
    return data;
}

export {
    userData
}