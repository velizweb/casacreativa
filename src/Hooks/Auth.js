import React from 'react'

const useIsAuth = localStorageKey => {

	const [ user, setUser ] = React.useState( JSON.parse(localStorage.getItem(localStorageKey))	 || '' );
  
	return [ user, setUser ];
    
  };


  
  export default useIsAuth