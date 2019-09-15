const getModule = async () => {
    if (!('axios' in window))
        window.axios = await import(
            /* webpackChunkName: "axiOS" */
            /* webpackMode: "lazy" */
            /* webpackPrefetch: true */
            /* webpackPreload: true */
            '../../node_modules/axios/dist/axios.js').then(m => m.default);
    return window.axios
}
export default getModule();//('axios' in window) && window.axios || axios;
