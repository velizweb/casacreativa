function getFatherProps(props){
      let result = {}

      Object.keys(props).map(function(item, key){
            if(item !=='children'){
                  
                  result = {
                        ...result,
                        [item] : props[item]
                  }
            }
            
            return true
      })
     
      return result
}
export default getFatherProps