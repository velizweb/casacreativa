import React,{useEffect,useState,useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import PaySheet from '../../API/PaySheet'
import Layout from './Layout'
import PaySheetContext from '../../Contexts/PaySheetContext'



function PaySheetDetail(props) {
  
	const PaySheetDetails = useContext(PaySheetContext)
	const {setPaySheetDetails} = useContext(PaySheetContext)
	const [ PaySheetTotals , setPaySheetTotals ] = useState({})
	const [ UserRequestsData , setUserRequestsData ] = useState([])
	const [ PenaltiesData , setPenaltiesData ] = useState([])
	const [ ShoppingRecords , setShoppingRecords ] = useState([])
	const [ loading ,setLoading ] = useState(true)
	const company_id = props.match.params.company_id
	const paysheet_code = props.match.params.paysheet_code
	const paysheet_id = props.match.params.paysheet_id
	const { addToast } = useToasts()
	const [ PaySheetKeys , setPaySheetKeys ] = useState({})



  	/*
  	*	Al iniciar el programa, cargar los totales generales
  	*/
	useEffect(() => {
		
		setPaySheetDetails({
			shoppingRecords : [],
			penalties : [],
			requests : []
		})

      	PaySheet.totals(company_id,paysheet_code,paysheet_id).then(response => {
			setPaySheetTotals(response.data)
			
			setPaySheetKeys({
				id : response.data.id,
				user_id : response.data.user_id,
				paysheet_code : response.data.paysheet_code
			})

          		
          		setLoading(false)

			
          
	  	}).catch(error => { setLoading(false) });
	  
	  	console.log('Cargando totales generales');

    },[company_id,paysheet_code,paysheet_id]);



    /*
    *	Cargar lista de egresos cuando esten listos los totales generales
    */
    useEffect(() => {
	
	if (PaySheetKeys.user_id){
		    
		// Loading penalties
		PaySheet.user_penalties( company_id , PaySheetKeys.user_id , paysheet_id ).then(response => {
			setPenaltiesData(response.data)
		}).catch(error => {});


		// Loading shopping records
		PaySheet.shopping_records_detail( company_id , PaySheetKeys.user_id , paysheet_id ).then(response => {
			setShoppingRecords(response.data)
		}).catch(error => {});
	
	  
		// Loading requests
		PaySheet.user_requests_detail( company_id , PaySheetKeys.user_id , paysheet_id ).then(response => {
			setUserRequestsData(response.data)
		}).catch(error => {});

		console.log('Cargando shopping records, penalties and requests')
	}
	//endIf
      
    },[ company_id,paysheet_id, PaySheetKeys ]);



	/*
	*	Al iniciar el programa cargar totales
	*/
	useEffect(()=>{
   
   
   		if(PaySheetKeys.user_id && PaySheetKeys.user_id){
			
			const data = PaySheetDetails;
		
			PaySheet.recalculate(company_id , PaySheetKeys.user_id , PaySheetKeys.id , data).then(response => {
			
				setPaySheetTotals({
					...PaySheetTotals,
					...response.data
				})
			
				setLoading(false)
			
		}).catch(error => { setLoading(false) });
	}
	
      
  },[ company_id , PaySheetDetails , setPaySheetTotals, PaySheetKeys ])



    function paid(){

      const data =
        {
          'generalData' : PaySheetTotals,
          'shoppingRecords' : PaySheetDetails.shoppingRecords,
          'penalties' : PaySheetDetails.penalties,
          'requests' : PaySheetDetails.requests
  
        }
  
        PaySheet.paid( company_id, PaySheetKeys.user_id, paysheet_id, data ).then(response => {
  
          PaySheet.totals(company_id,paysheet_code,paysheet_id).then(response => {
  
            setPaySheetTotals(response.data)
            
            setLoading(false)
  
            addToast(`Nomina liquidada con exito`, {
              appearance: 'success',
              autoDismiss: true,
              pauseOnHover: false,
            })
        
          })
          .catch(error => { setLoading(false) });
  
  
          PaySheet.user_penalties( company_id , PaySheetKeys.user_id, paysheet_id ).then(response => {
            setPenaltiesData(response.data)
          })
          .catch(error => {});
      
          // Loading shopping records
          PaySheet.shopping_records_detail( company_id , PaySheetKeys.user_id, paysheet_id ).then(response => {
            setShoppingRecords(response.data)
          })
          .catch(error => {});
        
          // Loading requests
          PaySheet.user_requests_detail( company_id , PaySheetKeys.user_id, paysheet_id ).then(response => {
            setUserRequestsData(response.data)
          })
          .catch(error => {});
  
  
          
        setLoading(false)
    
      }).catch(error => { setLoading(false) });
  
    }


  return <Layout
  			PaySheetDetailData={ PaySheetTotals }
	    	setPaySheetDetailData={setPaySheetTotals}
      	loading={ loading }
      	company_id={ company_id }
      	setPenaltiesData={setPenaltiesData}
      	PenaltiesData={PenaltiesData}
      	setShoppingRecords={setShoppingRecords}
      	ShoppingRecords={ShoppingRecords}
	      setUserRequestsData={setUserRequestsData}
      	UserRequestsData={UserRequestsData}
      	paid={paid}
    		/>
}

export default withRouter(PaySheetDetail);