import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Icon } from "semantic-ui-react";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const SidebarMenu = ({ location, history }) => {
  const user = useContext(UserContext);
  console.log(user);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <SideNav
      onSelect={selected => {
        const to = "/" + selected;
        if (location.pathname !== to) {
          history.push(to);
        }
      }}
      onToggle={handleToggle}
      style={{ marginTop: "60px", backgroundColor: "#3a3f51" }}
    >
      <SideNav.Toggle />
      {expanded && (
        <div
          style={{
            display: "block",
            whiteSpace: "nowrap",
            backgroundColor: "transparent",
            color: "#fff",
            height: "60px",
          }}
        >
          <div>Castillo</div>
          <div>Estudio</div>
        </div>
      )}
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <Icon name="home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Charts</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default withRouter(SidebarMenu);
