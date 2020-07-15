import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import ModelGallery from "../API/ModelGallery";
import getFatherProps from "../Helpers/GetFatherProps";
import UserContext from "../Contexts/UserContext";

function ModelGalleryController(props) {
  const company_id = props.match.params.company_id;
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const user = useContext(UserContext);

  function deleteImage(item) {
    setLoading(true);
    ModelGallery.delete(company_id, item.id)
      .then(response => {
        ModelGallery.list(company_id, user.id)
          .then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
          });
      })
      .catch(error => {
        setLoading(false);
      });
  }

  const childrenProps = {
    ...getFatherProps(props),
    ModelGalleryListProps: {
      company_id,
      Data,
      Loading,
      deleteImage,
    },
  };

  const Children = React.Children.map(props.children, child => {
    return React.cloneElement(child, childrenProps);
  });

  useEffect(() => {
    ModelGallery.list(company_id, user.id)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [company_id, user.id]);

  return Children;
}

export default withRouter(ModelGalleryController);
