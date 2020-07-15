import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import GuiStatistic from "../../gui/GuiStatistic";
import PieChart from "../AmCharts/PieChart";
import * as am4core from "@amcharts/amcharts4/core";

const dataPieSeries = [
  {
    country: "Lithuania",
    litres: 501.9,
  },
  {
    country: "Czech Republic",
    litres: 301.9,
  },
  {
    country: "Ireland",
    litres: 201.1,
  },
  {
    country: "Germany",
    litres: 165.8,
  },
  {
    country: "Australia",
    litres: 139.9,
  },
  {
    country: "Austria",
    litres: 128.3,
  },
  {
    country: "UK",
    litres: 99,
  },
  {
    country: "Belgium",
    litres: 60,
  },
  {
    country: "The Netherlands",
    litres: 50,
    color: am4core.color("#020100"),
  },
];

function Layout(props) {
  return (
    <>
      <Grid divided columns="equal">
        {props.Data.map((item, key) => {
          return (
            <Grid.Column key={key}>
              <GuiStatistic label={item.label} value={item.value} />
            </Grid.Column>
          );
        })}
      </Grid>

      <Grid divided columns="equal">
        <Grid.Column key="">
          <PieChart
            data={dataPieSeries}
            valueSeries={"litres"}
            valueCategory={"country"}
            container={"chartPieOne"}
          />
        </Grid.Column>
        <Grid.Column key="">
          <PieChart
            data={dataPieSeries}
            valueSeries={"litres"}
            valueCategory={"country"}
            container={"chartPieTwo"}
            typeDonut={true}
            strokeColor="#cecece"
            customColor={true}
          />
        </Grid.Column>
      </Grid>

      <Grid divided columns="equal">
        <Grid.Column key="">
          <PieChart
            data={dataPieSeries}
            valueSeries={"litres"}
            valueCategory={"country"}
            container={"chartPieThree"}
            typeDonut={true}
            strokeColor="#cecece"
            customColor={true}
            pieChart3D={true}
          />
        </Grid.Column>
        <Grid.Column key="">
          <PieChart
            data={dataPieSeries}
            valueSeries={"litres"}
            valueCategory={"country"}
            container={"chartPieFour"}
            typeDonut={true}
            strokeColor="#FF0000"
            disabledLabels={true}
            disabledTicks={true}
            withLegend={true}
            toolTipTextEmpty={true}
            pieChart3D={true}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Layout;
