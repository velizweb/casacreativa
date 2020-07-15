import React from "react";
import { Button, Input, Menu } from "semantic-ui-react";

export default function Gui(props) {
  return (
    <div>
      <form className="form-signin" autoComplete="nope" onSubmit={props.onSubmitHandler}>
        <div className="form-label-group">
          <label>Nombre del producto</label>
          <Input
            disabled={props.loading}
            style={{ marginBottom: "1em" }}
            fluid
            control="input"
            placeholder="Correo electronico"
            name="email"
            value={props.params.email || ""}
            onChange={(e) => props.handleChange(e.target.value, e.target.name)}
          />

          {/* <input
                        disabled={props.loading}
                        type="email" 
                        className="form-control" 
                        placeholder="Email address" 
                        required
                        onChange={props.handleChange}
                        value={props.params.email || ''}
                        name='email'
                        id='email'
                        />
                      <label htmlFor="email">Correo electronico</label> */}
        </div>

        <div className="form-label-group">
          <label>Clave</label>
          <Input
            disabled={props.loading}
            style={{ marginBottom: "1em" }}
            fluid
            type="password"
            control="input"
            placeholder="******"
            name="password"
            value={props.params.password || ""}
            onChange={(e) => props.handleChange(e.target.value, e.target.name)}
          />

          {/* <input
                      disabled={props.loading}
                      type="password" 
                      className="form-control"
                      placeholder="Password" required
                      onChange={props.handleChange}
                      value={props.params.password || ''}
                      name='password'
                      id='password'/>
                      <label htmlFor="password">Tu clave de acceso</label> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "35px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button positive disabled={props.loading} type="submit">
            Entrar
          </Button>
          <Menu text>
            <Menu.Item name="¿Olvide Contraseña?" onClick={() => props.onRecoverPassword()} />
          </Menu>
        </div>
      </form>
    </div>
  );
}
