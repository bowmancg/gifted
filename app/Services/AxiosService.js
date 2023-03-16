

export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 8000
})

export const giftApi = new axios.create({
    baseURL: 'api.giphy.com/v1/gifs/',
    timeout: 8000,
    params: { api_key: '0HvU8MW6Fr9Z120Is5aMPlM6oQw8lDa0'}
})