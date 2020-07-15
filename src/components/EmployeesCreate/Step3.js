import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Step3(props) {
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
                labelIdle='<image src="http://portal.easystudiosoft.com/img/identificacionFront.jpg" width="100%"/> '
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.ReverseIdCard}
                allowMultiple={false}
                onupdatefiles={props.setReverseIdCard}
                labelIdle='<image src="http://portal.easystudiosoft.com/img/identificacionBack.jpg" className="mb-3" width="100%"/> '
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.OnHandIdCard}
                allowMultiple={false}
                onupdatefiles={props.setOnHandIdCard}
                labelIdle='<image src="http://portal.easystudiosoft.com/img/HandFront.jpg" className="mb-3" width="100%"/> '
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.FrontReverseIdCard}
                allowMultiple={false}
                onupdatefiles={props.setFrontReverseIdCard}
                labelIdle='<image src="http://portal.easystudiosoft.com/img/HandBack.jpg" className="mb-3" width="100%"/> '
              />
            </Grid.Column>

            <Grid.Column width={8} className="mt-1">
              <FilePond
                stylePanelAspectRatio="1:1"
                className="mt-3 d-block"
                files={props.AvatarImage}
                allowMultiple={false}
                onupdatefiles={props.setAvatarImage}
                labelIdle='<image src="https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" className="mb-3" width="100%"/> '
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
