import React from 'react'

function returnChildByStringKey(childs, customKey, customProps){
      let result = ''
      childs.map((item, key)=>{
            if(item.key === customKey ){
                  result = React.Children.map(item,(child)=>{
                        return React.cloneElement(child,{
                              ...customProps
                        })
                  })
            }
            
            return true
      })

      return result;
}

export default returnChildByStringKey