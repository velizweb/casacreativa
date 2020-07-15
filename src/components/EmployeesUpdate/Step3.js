import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";
import { FilePond, registerPlugin } from "react-filepond";
import Env from "../../Env";

// Import FilePond styles

import "filepond/dist/filepond.min.css";
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Step3(props) {
  // const FrontIdCardSrc = (props.Employee.front_id_card) ? props.Employee.front_id_card : 'http://portal.easystudiosoft.com/img/identificacionFront.jpg';

  function backHandler() {
    props.decremetStepHeader();
    props.previousStep();
  }

  return (
    <Grid className="mt-2">
      <Grid.Column width={16}>
        <Segment>
          <Button.Group attached="top">
            <Button positive onClick={backHandler}>
              Atras
            </Button>
          </Button.Group>

          <Grid className="mt-2">
            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.FrondIdCard}
                allowMultiple={false}
                onupdatefiles={props.setFrontIdCard}
                labelIdle={`<div 
      style='
      background:white;
      padding:10px;
      display:block;
      height:125px;
       background-size:cover;
       background-position: center;
       background-image:url(${Env.storage_uri(props.Employee.front_id_card)})'></div>`}
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.ReverseIdCard}
                allowMultiple={false}
                onupdatefiles={props.setReverseIdCard}
                labelIdle={`<div 
      style='
      background:white;
      padding:10px;
      display:block;
      height:125px;
       background-size:cover; 
       background-position: center;
       background-image:url(${Env.storage_uri(props.Employee.reverse_id_card)})'></div>`}
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.OnHandIdCard}
                allowMultiple={false}
                onupdatefiles={props.setOnHandIdCard}
                labelIdle={`<div 
      style='
      background:white;
      padding:10px;
      display:block;
      height:125px;
       background-size:cover; 
       background-position: center;
       background-image:url(${Env.storage_uri(props.Employee.on_hand_id_card)})'></div>`}
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.FrontReverseIdCard}
                allowMultiple={false}
                onupdatefiles={props.setFrontReverseIdCard}
                labelIdle={`<div 
      style='
      background:white;
      padding:10px;
      display:block;
      height:125px;
       background-size:cover; 
       background-position: center;
       background-image:url(${Env.storage_uri(props.Employee.front_reverse_id_card)})'></div>`}
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.AvatarImage}
                allowMultiple={false}
                onupdatefiles={props.setAvatarImage}
                labelIdle={`<div 
      style='
      background:white;
      padding:10px;
      display:block;
      height:125px;
       background-size:cover; 
       background-position: center;
       background-image:url(${Env.storage_uri(props.Employee.avatar_image)})'></div>`}
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.OtherDocuments}
                allowMultiple={false}
                onupdatefiles={props.setOtherDocuments}
                labelIdle='<image src="https://www.vappingo.com/word-blog/wp-content/uploads/2011/01/paper2.jpg" className="mb-3" width="100%"/> '
              />
            </Grid.Column>
          </Grid>

          <Button.Group attached="bottom">
            <Button positive onClick={backHandler}>
              Atras
            </Button>
          </Button.Group>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default withRouter(Step3);
