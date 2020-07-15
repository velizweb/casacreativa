export default function ExceptRols(except)
	{   
        const system_rols = [ 'Super admin' , 'Admin', 'Monitor', 'Model' ]
        let result = []
        
		system_rols.map((system_rol_item, system_rol_key) => {
			
			let exist = false;

			except.map((item,key)=>{
				if(system_rol_item === item){
					exist = true;
				}
				return true
			})
			
			if(!exist){
				result.push(system_rol_item)
			}
			return true
		})

		return result;
	}