import React from 'react';

function returnChildWithProps(children, customProps){
      return React.Children.map(children,(child)=>{
            return React.cloneElement(child,{
                  ...customProps
            })
      })
}



export default returnChildWithProps