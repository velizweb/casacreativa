import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Step,
  Form,
  Button,
  Loader,
  Message,
  Grid,
  Segment,
  Label,
  Icon,
  Dimmer,
} from "semantic-ui-react";

import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step1Preview from "./Step1_preview";
import Step2Preview from "./Step2_preview";
import Step3Preview from "./Step3_preview";

function Layout(props) {
  const [CurrentStep, setCurrentStep] = useState(1);

  function handleItemClick() {
    props.isModel
      ? props.history.push("/company/models/" + props.match.params.company_id)
      : props.history.push("/company/employees/list/" + props.match.params.company_id);
  }

  function incremetStepHeader() {
    setCurrentStep(CurrentStep + 1);
  }

  function decremetStepHeader() {
    setCurrentStep(CurrentStep - 1);
  }

  if (props.loading) {
    return <Loader active inline="centered" />;
  }

  if (props.Creating) {
    return (
      <Segment padded="very">
        <Dimmer active>
          <Loader indeterminate>
            Subiendo archivos, por favor no cierre esta pagina hasta completar el proceso
          </Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <div>
      {props.created ? (
        <div>
          <Message
            success
            header={
              props.isModel
                ? "La modelo fue creado correctamente"
                : "El empleado fue creado satisfactoriamente"
            }
          />

          <Button type="button" positive onClick={() => handleItemClick()}>
            Ir a la lista de {props.isModel ? "modelos" : "empleados"}
          </Button>
        </div>
      ) : (
        ""
      )}

      {!props.created ? (
        <Form size={"small"} onSubmit={props.handleSubmit}>
          <Grid.Column columns="equal">
            <Step.Group ordered>
              <Step
                completed={CurrentStep > 1 ? true : false}
                active={CurrentStep === 1 ? true : false}
                size={"mini"}
              >
                <Step.Content>
                  <Step.Title>Informacion personal</Step.Title>
                  {/* <Step.Description>Your employee personal information</Step.Description> */}
                </Step.Content>
              </Step>

              <Step
                completed={CurrentStep > 2 ? true : false}
                active={CurrentStep === 2 ? true : false}
              >
                <Step.Content>
                  <Step.Title>Contacto</Step.Title>
                  {/* <Step.Description>Your employee contact information</Step.Description> */}
                </Step.Content>
              </Step>

              <Step active={CurrentStep === 3 ? true : false}>
                <Step.Content>
                  <Step.Title>Documentos y fotos</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>

            <br />
          </Grid.Column>

          <Grid columns="equal">
            <Grid.Column width={6}>
              <StepWizard initialStep={1} isLazyMount={true}>
                <Step1
                  Employee={props.Employee}
                  handleChange={props.handleChange}
                  incremetStepHeader={incremetStepHeader}
                />

                <Step2
                  Employee={props.Employee}
                  handleChange={props.handleChange}
                  incremetStepHeader={incremetStepHeader}
                  decremetStepHeader={decremetStepHeader}
                />

                <Step3
                  Employee={props.Employee}
                  handleChange={props.handleChange}
                  decremetStepHeader={decremetStepHeader}
                  FrondIdCard={props.FrondIdCard}
                  setFrontIdCard={props.setFrontIdCard}
                  ReverseIdCard={props.ReverseIdCard}
                  setReverseIdCard={props.setReverseIdCard}
                  OnHandIdCard={props.OnHandIdCard}
                  setOnHandIdCard={props.setOnHandIdCard}
                  FrontReverseIdCard={props.FrontReverseIdCard}
                  setFrontReverseIdCard={props.setFrontReverseIdCard}
                  AvatarImage={props.AvatarImage}
                  setAvatarImage={props.setAvatarImage}
                  OtherDocuments={props.OtherDocuments}
                  setOtherDocuments={props.setOtherDocuments}
                />
              </StepWizard>
            </Grid.Column>

            <Grid.Column>
              {props.Employee.charge_type === "Model" &&
              props.Employee.first_name &&
              props.Employee.last_name &&
              props.Employee.gender &&
              props.Employee.identification_type &&
              props.Employee.identification_number &&
              props.Employee.primary_phone &&
              props.Employee.email &&
              props.FrondIdCard.length &&
              props.ReverseIdCard.length &&
              props.OnHandIdCard.length ? (
                <Button fluid size={"massive"} positive>
                  <Icon name="save" /> Crear modelo
                </Button>
              ) : (
                ""
              )}
              {props.Employee.charge_type !== "Model" &&
              props.Employee.first_name &&
              props.Employee.last_name &&
              props.Employee.gender &&
              props.Employee.identification_type &&
              props.Employee.identification_number &&
              props.Employee.primary_phone &&
              props.Employee.email &&
              props.FrondIdCard.length &&
              props.ReverseIdCard.length ? (
                <Button fluid size={"massive"} positive>
                  <Icon name="save" /> Crear empleado
                </Button>
              ) : (
                ""
              )}

              <Segment padded>
                <Label attached="top" color="green">
                  Informacion del empleado
                </Label>

                <Grid columns="equal" divided>
                  <Step1Preview Employee={props.Employee} />
                  <Step2Preview Employee={props.Employee} />
                  {CurrentStep === 3 && (
                    <Step3Preview
                      FrondIdCard={props.FrondIdCard}
                      setFrontIdCard={props.setFrontIdCard}
                      ReverseIdCard={props.ReverseIdCard}
                      setReverseIdCard={props.setReverseIdCard}
                      OnHandIdCard={props.OnHandIdCard}
                      setOnHandIdCard={props.setOnHandIdCard}
                      FrontReverseIdCard={props.FrontReverseIdCard}
                      setFrontReverseIdCard={props.setFrontReverseIdCard}
                      AvatarImage={props.AvatarImage}
                      setAvatarImage={props.setAvatarImage}
                      OtherDocuments={props.OtherDocuments}
                      setOtherDocuments={props.setOtherDocuments}
                      Employee={props.Employee}
                    />
                  )}
                </Grid>
              </Segment>

              {props.Employee.charge_type === "Model" &&
              props.Employee.first_name &&
              props.Employee.last_name &&
              props.Employee.gender &&
              props.Employee.identification_type &&
              props.Employee.identification_number &&
              props.Employee.primary_phone &&
              props.Employee.email &&
              props.FrondIdCard.length &&
              props.ReverseIdCard.length &&
              props.OnHandIdCard.length ? (
                <Button fluid size={"massive"} positive>
                  <Icon name="save" /> Crear modelo
                </Button>
              ) : (
                ""
              )}
              {props.Employee.charge_type !== "Model" &&
              props.Employee.first_name &&
              props.Employee.last_name &&
              props.Employee.gender &&
              props.Employee.identification_type &&
              props.Employee.identification_number &&
              props.Employee.primary_phone &&
              props.Employee.email &&
              props.FrondIdCard.length &&
              props.ReverseIdCard.length ? (
                <Button fluid size={"massive"} positive>
                  <Icon name="save" /> Crear empleado
                </Button>
              ) : (
                ""
              )}
            </Grid.Column>
          </Grid>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(Layout);
