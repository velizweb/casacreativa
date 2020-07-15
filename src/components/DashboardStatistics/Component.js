import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { Statistic, Card, Segment } from "semantic-ui-react";
import STATISTICS from "../../API/Statistics";

function DashboardStatistics(props) {
  const [CompaniesQty, setCompaniesQty] = useState(0);
  const [Blogs, setBlogPosts] = useState([]);

  function getcompaniesQty() {
    STATISTICS.countCompanies()
      .then((response) => {
        setCompaniesQty(response.data.total);
      })
      .catch((error) => {
        /* . . . */
      });
  }

  useEffect(() => {
    getcompaniesQty();
  }, []);

  return (
    <div>
      <Grid divided columns="equal">
        <Grid.Column>
          <Card>
            <center>
              <Segment inverted>
                <Statistic inverted>
                  <Statistic.Value>{CompaniesQty}</Statistic.Value>
                  <Statistic.Label>Estudios</Statistic.Label>
                </Statistic>
              </Segment>
            </center>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <center>
              <Segment inverted>
                <Statistic inverted>
                  <Statistic.Value>{CompaniesQty}</Statistic.Value>
                  <Statistic.Label>Estudios</Statistic.Label>
                </Statistic>
              </Segment>
            </center>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <center>
              <Segment inverted>
                <Statistic inverted>
                  <Statistic.Value>{CompaniesQty}</Statistic.Value>
                  <Statistic.Label>Estudios</Statistic.Label>
                </Statistic>
              </Segment>
            </center>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default withRouter(DashboardStatistics);
