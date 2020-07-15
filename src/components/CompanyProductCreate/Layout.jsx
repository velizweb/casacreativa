import React from 'react';
import { withRouter } from 'react-router-dom'
import NoItems from '../NoItems/Component';
import { Form,Divider,Button,Loader,Grid,Input,Header,TextArea } from 'semantic-ui-react'
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


    

    if(props.created){
        return <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row style={{height: '80vh'}}>
                <Grid.Column>
                    <NoItems
                        title='Producto creado con exito'
                        message='Escoje una opcion'
                        firstButtonText={'Volver a la lista'}
                        firstPage={'/company-products/'+props.company_id}
                        secondButtonText={'Crear otro producto'}
                        secondPage={'/company-products/create/'+props.company_id}
                        secondCallback={props.resetStates}
                        />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    }

    return (
        <div>                  
        <Form size={'small'} onSubmit={props.handleSubmit}>

        <Grid>
        <Grid.Column width={16}>
            <Header as='h2'>
                Crear producto
            </Header>
            <Divider />
        </Grid.Column>
            <Grid.Column width={4}>
                
            <FilePond
                stylePanelAspectRatio='1:1'
                files={props.ImageProduct}
                allowMultiple={false}
                onupdatefiles={props.setImageProduct}
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
                <Input  
                    style={{marginBottom:'1em'}}
                    fluid
                    control='input'
                    placeholder='Num'
                    name='enable'
                    value={props.Product.enable}
                    onChange={(e)=>props.handleChange(e.target.value,e.target.name)}
                />

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

                    <Button type='submit' positive fluid>Crear</Button>
                </Grid.Column>

            </Grid>

            

                
            </Grid.Column>
        </Grid>


        </Form>
        </div>)
}

export default withRouter(Layout);