import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import PaySheet from '../../API/PaySheet'
import Layout from './Layout'



function PaySheetHistory(props) {
  
  const [ PaySheetHistoryData , setPaySheetHistoryData ] = useState([])
  const [ loading ,setLoading ] = useState(true)
  const company_id = props.match.params.company_id
  const paysheet_code = (props.match.params.paysheet_code) ? props.match.params.paysheet_code : '';
   
    useEffect(() => {
      
      PaySheet.management(company_id,paysheet_code).then(response => {

          setPaySheetHistoryData(response.data)
          setLoading(false)
      
        })
        .catch(error => {
      
    setLoading(false)

        });
      
    },[company_id,paysheet_code]);

    function mark(company_id, item_id){
	

	let temp_data = PaySheetHistoryData;

      PaySheet.mark(company_id,item_id).then(response => {
		
		    


		 temp_data.map((item, index)=>{
			
			if(item_id === item.id)
			{	
				temp_data[index].paid = (temp_data[index].paid  ) ? 0 : 1;
				console.log(temp_data[index].paid)
				setPaySheetHistoryData([
					...temp_data
				]);
				return true;
      }
      return true;
		})

		


        })
      .catch(error => {



        });
    }


  return (
       
    <Layout
	PaySheetHistoryData={ PaySheetHistoryData }
	setPaySheetHistoryData={setPaySheetHistoryData}
      loading={ loading }
      company_id={ company_id }
      mark={ mark }
    />
          
  );
}

export default withRouter(PaySheetHistory);
