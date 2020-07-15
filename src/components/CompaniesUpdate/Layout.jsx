import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid,Form,Header,Divider,Button,Input,Loader,TextArea } from 'semantic-ui-react'

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Layout(props) {

    if(props.loading){
        return (<Loader active inline='centered' />)
    }


    return (
        <div>                  
        <Form size={'small'} onSubmit={props.handleSubmit}>

        <Grid>
        <Grid.Column width={16}>
            <Header as='h2'>
                Actualizar producto
            </Header>
            <Divider />
        </Grid.Column>
            <Grid.Column width={4}>
                
            <FilePond
                stylePanelAspectRatio='1:1'
                files={props.ImageProduct}
                allowMultiple={false}
                onupdatefiles={props.setImageProduct}
                labelIdle={'<image src="'+props.OldImage+'" width="100%"/> '}
                
            /> 
            
            </Grid.Column>
            <Grid.Column width={4}>
                
                <label>Nombre del producto</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='El nombre de tu producto'
                    name='product_name'
                    value={props.Product.product_name}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                <label>Precio</label>
                <Input
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='$ 0,00'
                    name='price'
                    value={props.Product.price}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
                <label>Inpuesto</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='$ 0,00'
                    name='tax'
                    value={props.Product.tax}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

            </Grid.Column>
            <Grid.Column width={6}>

            <Grid>
                <Grid.Column width={8}>
                <label>Existencia</label>
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='Num'
                    name='existence'
                    value={props.Product.existence}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />
                </Grid.Column>
                <Grid.Column width={8}>
                    
                <label>Habilitado</label>
                <Button.Group>
                    <Button 
                        negative={(props.ProductEnable===0) ? true : false}
                        type={'button'}
                        onClick={()=>props.publishProduct(0)}>No</Button>
                    <Button.Or />
                    <Button 
                        positive={(props.ProductEnable===1) ? true : false}
                        type={'button'} 
                        onClick={()=>props.publishProduct(1)}>Si</Button>
                </Button.Group>

                {/* <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='Num'
                    name='enable'
                    value={props.Product.enable}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                /> */}

                </Grid.Column>
                <Grid.Column width={16}>
                <label>Descripcion</label>
                <TextArea  
                    style={{marginBottom:'1em'}}
                    fluid='true'
                    control='input'
                    placeholder='Escriba la descripcion del producto aqui'
                    name='description'
                    value={props.Product.description}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

                    <Button type='submit' positive fluid>Actualizar producto</Button>
                </Grid.Column>

            </Grid>

            

                
            </Grid.Column>
        </Grid>


        </Form>
        </div>
					
  );
}

export default withRouter(Layout);