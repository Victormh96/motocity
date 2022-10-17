// Env
const url_base = process.env.VUE_APP_URL_BASE

// Routes Auth
export const login = () => `${url_base}/api/login`

// Routes Community
export const offer = () => `${url_base}/api/offer`

export const top = () => `${url_base}/api/top`

export const featured = () => `${url_base}/api/featured`

export const product = () => `${url_base}/api/product/`

export const random = () => `${url_base}/api/random`

export const search = () => `${url_base}/api/search/`

// Routes User
export const cart = () => `${url_base}/api/cart`

export const list = () => `${url_base}/api/list`

export const destroy = () => `${url_base}/api/destroy/`

export const pay = () => `${url_base}/api/pay`

// Routes Admin
export const all = () => `${url_base}/api/all`

export const add = () => `${url_base}/api/add`

export const update = () => `${url_base}/api/update/`

