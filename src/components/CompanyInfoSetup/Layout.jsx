import React from 'react';
import { withRouter } from 'react-router-dom'
import NoItems from '../NoItems/Component';
import { Form,Divider,Button,Loader,Grid,Input,Header } from 'semantic-ui-react'
import Env from '../../Env'

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);



function Layout(props) {

// Register the plugins

    if(props.created){
        return <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row style={{height: '80vh'}}>
                <Grid.Column>
                    <NoItems
                        title='Los datos fueron actualizados satisfactoriamente'
                        firstButtonText={'Volver al home'}
                        firstPage={'/'}
                        />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    }


    function openFakeInput1(){

        let item = document.getElementById('fake_input1')
        item.click()

    }

    function setPreview1(files){

        const file = files[0]

        var reader = new FileReader();
        reader.readAsBinaryString(file);
        
        reader.onload = function() {
            props.setPrimaryLogo(btoa(reader.result))
            props.setLogo1(file)
        };

        reader.onerror = function() {
            console.log('there are some problems');
        };

    }

    function setPreview2(files){

            const file = files[0];

            var reader = new FileReader();
            reader.readAsBinaryString( file );
        
            reader.onload = function() {
                props.setSecondaryLogo(btoa(reader.result))
                props.setLogo2(file)
            };

            reader.onerror = function() {
                console.log('there are some problems');
            };

    }

    function openFakeInput2(){
        let item = document.getElementById('fake_input2')
        item.click()
    }



    return (
        <div>                  
        <Form size={'small'} onSubmit={props.handleSubmit}>

        <Grid>
        <Grid.Column width={16}>
            <Header as='h2'>
                Actualizar el branding de tu estudio
            </Header>
            <p>Personaliza la informacion de tu estudio.</p>
            <Divider />
        </Grid.Column>
          
            <Grid.Column width={16}>

            <label>Nombre del estudio</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='company_name'
                    value={props.CompanyInfo.company_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />


                <label>Correo electronico</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='company_email'
                    value={props.CompanyInfo.company_email}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

            <label>Telefono</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder=''
                    name='primary_phone'
                    value={props.CompanyInfo.primary_phone}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                    <label>Logo principal</label>
                    <div style={{
                        width : '200px',
                        height : '67px',
                        backgroundImage: (props.primaryLogo) ? `url(" data:image/png;base64, ${props.primaryLogo}")` : 'url(https://www.cinteco.com/wp-content/uploads/2012/01/600x200.png)',
                        backgroundSize : "100%",
                        backgroundPosition: 'center',
                        cursor : 'pointer'
                    }} onClick={()=>openFakeInput1()}>
                        <input type="file" id='fake_input1' style={{display : 'none'}} onChange={ (e)=>setPreview1(e.target.files) }  />
                    </div>

                    {/* <label>Logo secundario</label>
                    <div style={{
                        width : '200px' ,
                        height : '67px',
                        backgroundImage: (props.secondaryLogo) ? `url(" data:image/png;base64, ${props.secondaryLogo}")` : 'url(https://www.cinteco.com/wp-content/uploads/2012/01/600x200.png)',
                        backgroundSize : "cover",
                        backgroundPosition: 'center',
                        cursor : 'pointer'
                    }} onClick={()=>openFakeInput2()}>
                        <input type="file" id='fake_input2' style={{display : 'none'}} onChange={ (e)=>setPreview2(e.target.files) }  />
                    </div> */}

                    <br/>
                <Button type='submit' positive fluid>Aplicar</Button>

            </Grid.Column>
        </Grid>


        </Form>
        </div>)
}

export default withRouter(Layout);