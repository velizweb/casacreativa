
function PaySheetItemSelector(collection, PaySheetDetails, compare_item){


        let temp_items
        let item_exist = false;
        let result = []
        
        if( collection === 'shoppingRecords' ){
             temp_items = PaySheetDetails.shoppingRecords;
            }
            
        if( collection === 'penalties' ){
            temp_items = PaySheetDetails.penalties;
        }
        
        if( collection === 'requests' ){
            temp_items = PaySheetDetails.requests;
        }
        
        
        // Verifica si el id existe en el array
        temp_items.map((item, key)=>{
            if( compare_item.id === item ){
                item_exist = true;
            }
            return true;
        })
        
        
        // Si el elemento no existe lo agrega
        if( item_exist === false ){
            
            temp_items.push(compare_item.id)
            
            return {
                ...PaySheetDetails,
                [collection] : temp_items
            }
        }
        
        
        // Si el elemento existe lo elimina
        if( item_exist === true ){
            
            
            temp_items.map((item, key)=>{
                
                
                if(item !== compare_item.id){
                    result.push(item)
                }
                
                return false
            })
            
            return {
                ...PaySheetDetails,
                [collection] : result
            }
        }
        
    

}

export default PaySheetItemSelector;