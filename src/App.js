import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserProvider from "./Contexts/UserProvider";
import UserRolsProvider from "./Contexts/UserRolsProvider";
import PaysheetProvider from "./Contexts/PaysheetProvider";
import StatisticsProvider from "./Contexts/StatisticsProvider";
import CartProvider from "./Contexts/CartProvider";

import { ToastProvider } from "react-toast-notifications";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import RolesValidatorRoutes from "./Routes/RolesValidatorRoutes";
import CompanySetupEmployeesRequestsRoutes from "./Routes/CompanySetupEmployeesRequestsRoutes";
import CompanyEmployeesRoutes from "./Routes/CompanyEmployeesRoutes";
import CompanySetupEmployeesPenaltiesRoutes from "./Routes/CompanySetupEmployeesPenaltiesRoutes";
import CompanySetupProductsRoutes from "./Routes/CompanySetupProductsRoutes";
import CompanyAccountRequestsRoutes from "./Routes/CompanyAccountRequestsRoutes";
import CompanyPaySheetRoutes from "./Routes/CompanyPaySheetRoutes";
import CompanyRoomsRoutes from "./Routes/CompanyRoomsRoutes";
import CompanyPlatformsRoutes from "./Routes/CompanyPlatformsRoutes";
import CompanySetupInventaryRoutes from "./Routes/CompanySetupInventaryRoutes";
import SuperAdminCompaniesRoutes from "./Routes/SuperAdminCompaniesRoutes";
import SuperAdminAccountRequestsRoutes from "./Routes/SuperAdminAccountRequestsRoutes";
import CompanyEmployeesRequestsRoutes from "./Routes/CompanyEmployeesRequestsRoutes";
import CompanyModelsRoutes from "./Routes/CompanyModelsRoutes";
import CompanyLearningRoutes from "./Routes/CompanyLearningRoutes";
import CompanyDashboardRoutes from "./Routes/CompanyDashboardRoutes";

import ModelDashboardRoutes from "./Routes/ModelDashboardRoutes";
import ModelLearningRoutes from "./Routes/ModelLearningRoutes";
import ModelPenaltiesRoutes from "./Routes/ModelPenaltiesRoutes";
import ModelRequestsRoutes from "./Routes/ModelRequestsRoutes";
import ModelShoppingRecordsRoutes from "./Routes/ModelShoppingRecordsRoutes";
import ModelGalleryRoutes from "./Routes/ModelGalleryRoutes";

import AccountSecurityRoutes from "./Routes/AccountSecurityRoutes";
import CompanyInfoSetupRoutes from "./Routes/CompanyInfoSetupRoutes";
import CompanyExcelRoutes from "./Routes/CompanyExcelRoutes";
import RecoverPassword from "./Routes/CompanyUserRouter";
import EcommerceRoutes from "./Routes/EcommerceRoutes";
import "roboto-npm-webfont";

import SimpleReactLightbox from "simple-react-lightbox";

import "./App.css";

/* basename='/app/' */
const options = {
  overlayColor: "black",
  captionStyle: {
    captionColor: "red",
    captionFontFamily: "Raleway, sans-serif",
    captionFontSize: "22px",
    captionFontWeight: "300",
    captionFontStyle: "capitalize",
  },
  buttonsStyle: {
    buttonsBackgroundColor: "blue",
    buttonsIconColor: "rgba(126, 172, 139, 0.8)",
  },
  autoplaySpeed: 1,
  transitionSpeed: 1,
  showCaption: false,
  showThumbnails: false,
};

const routes = [
  RolesValidatorRoutes,
  CompanySetupEmployeesRequestsRoutes,
  CompanyEmployeesRoutes,
  CompanySetupEmployeesPenaltiesRoutes,
  CompanySetupProductsRoutes,
  CompanyAccountRequestsRoutes,
  CompanyInfoSetupRoutes,
  CompanyPaySheetRoutes,
  CompanyRoomsRoutes,
  CompanyPlatformsRoutes,
  CompanySetupInventaryRoutes,
  CompanyEmployeesRequestsRoutes,
  CompanyModelsRoutes,
  CompanyDashboardRoutes,
  SuperAdminCompaniesRoutes,
  SuperAdminAccountRequestsRoutes,
  CompanyLearningRoutes,
  ModelDashboardRoutes,
  ModelLearningRoutes,
  ModelPenaltiesRoutes,
  ModelRequestsRoutes,
  ModelShoppingRecordsRoutes,
  EcommerceRoutes,
  ModelGalleryRoutes,
  AccountSecurityRoutes,
  CompanyExcelRoutes,
  RecoverPassword,
];

function App() {
  return (
    <div>
      <SimpleReactLightbox {...options}>
        <BrowserRouter>
          <Switch>
            <UserProvider>
              <UserRolsProvider>
                <PaysheetProvider>
                  <ToastProvider>
                    <StatisticsProvider>
                      <CartProvider>
                        <Route exact path="/" render={(props) => <LoginPage />} />
                        <Route exact path="/register" render={(props) => <RegisterPage />} />
                        <Route exact path="/login" render={(props) => <LoginPage />} />
                        {routes.map((routes_item, routes_item_key) => {
                          return routes_item.map((item, key) => {
                            return (
                              <Route exact path={item.path} key={routes_item_key + "_" + key}>
                                {item.page}
                              </Route>
                            );
                          });
                        })}
                      </CartProvider>
                    </StatisticsProvider>
                  </ToastProvider>
                </PaysheetProvider>
              </UserRolsProvider>
            </UserProvider>
          </Switch>
        </BrowserRouter>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
