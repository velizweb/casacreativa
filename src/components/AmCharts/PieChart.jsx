import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/**
 * Pie chart component documentation
 * https://www.amcharts.com/docs/v4/chart-types/pie-chart/
 */
const PieChart = ({
  pieChart3D = false,
  container,
  data,
  valueSeries,
  valueCategory,
  typeDonut = false,
  strokeColor = "rgb(86, 74, 163)",
  disabledLabels = false,
  disabledTicks = false,
  withLegend = false,
  toolTipTextEmpty = false,
  customColor = false,
}) => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    //let typePieChart = pieChart3D ? am4charts.PieChart3D : am4charts.PieChart;
    let chart = am4core.create(container, pieChart3D ? am4charts.PieChart3D : am4charts.PieChart);
    chart.data = data;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = valueSeries;
    pieSeries.dataFields.category = valueCategory;

    pieSeries.slices.template.stroke = am4core.color(strokeColor);

    pieSeries.labels.template.disabled = disabledLabels;
    pieSeries.ticks.template.disabled = disabledTicks;

    if (customColor) pieSeries.slices.template.propertyFields.fill = "color";

    if (toolTipTextEmpty) pieSeries.slices.template.tooltipText = "";

    if (typeDonut) chart.innerRadius = am4core.percent(40);

    if (withLegend) chart.legend = new am4charts.Legend();
  }, [data]);

  return <div id={`${container}`}></div>;
};

export default PieChart;
