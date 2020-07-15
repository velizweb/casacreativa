/* Dev enviroment */

const Env = {
    api_uri : (uri)=> { return 'http://lacasacreativa.work/laravel/public/api/'+ uri},
    storage_uri : (uri)=> { return 'http://lacasacreativa.work/laravel/public/storage/'+ uri},
}



/* Test enviroment */

// const Env = {
//     api_uri : (uri)=> { return 'http://lacasacreativa.work/laravel/public/api/'+ uri},
//     storage_uri : (uri)=> { return 'http://lacasacreativa.work/laravel/public/storage/'+ uri},
// }


export default Env;
