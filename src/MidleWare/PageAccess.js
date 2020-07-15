export default function PageAccess(accesibleBy , UserContextRols ){

    let result = false;

    accesibleBy.map((accesible_rol,rol_key)=>{

        UserContextRols.map((user_rol,user_rol_key)=>{

            if(accesible_rol === user_rol.user_type){
                result = true;
            }
            
            return true;
        })

        return true;
    })
    
    return result;
    
}