getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const res = await fetch(url)
    
    const json = await res.json()

    return json
}

module.exports = {
    getUsers
}