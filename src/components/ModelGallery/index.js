import React,{useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom'
import Env from '../../Env'
import StackGrid from "react-stack-grid"
import { Button } from 'semantic-ui-react'
import { SRLWrapper } from "simple-react-lightbox";

function UserProfileCard(props) {
    
      const [refGrid, setRefGrid] = useState(false);
	const options = {
		overlayColor: "black",
		buttonsIconPadding: "2px",
		showCaption: false,
		buttonsBackgroundColor: "white",
		buttonsIconColor: "black",
		showThumbnails: true,
		transitionSpeed: 0,
		// transitionTimingFunction: "linear",
		transitionTimingFunction: "ease",
		enablePanzoom: false,
		hideControlsAfter: 0
	    };

	    
	    


      useEffect(()=>{
          setInterval(function(){
            if( refGrid )
                refGrid.updateLayout()
          },3000)
	},[refGrid])

    return (
            <div>
            	<SRLWrapper options={options}>
				<StackGrid
					columnWidth={215}
					duration={0}
					gridRef={grid => setRefGrid(grid)}
					monitorImagesLoaded={true}>
				{props.Data.map((item,key) =>{
					return (<div key={key+'test'}>
						<img src={ Env.storage_uri(item.src) } width={'100%'} alt='Imagen' />
						<Button  icon='trash' style={{position:'absolute',top:'10px',right: '10px', color:'red'}} onClick={()=>props.deleteImage(item)} />

					</div>)
					})
				}
				</StackGrid>

              	</SRLWrapper>
            </div>
	);
}

export default withRouter(UserProfileCard);