import React from "react";
import { Button, Input, Menu } from "semantic-ui-react";

export default function Gui({
  onSubmitHandler,
  loading,
  exist,
  email,
  setEmail,
  password,
  setPassword,
  onBack,
}) {
  return (
    <div>
      <form className="form-signin" autoComplete="nope" onSubmit={onSubmitHandler}>
        <div className="form-label-group">
          <label>Ingrese su Email</label>
          <Input
            disabled={loading}
            style={{ marginBottom: "1em" }}
            fluid
            control="input"
            placeholder="Email"
            name="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {exist && (
          <div className="form-label-group">
            <label>Ingrese nueva contraseña</label>
            <Input
              disabled={loading}
              style={{ marginBottom: "1em" }}
              fluid
              control="input"
              placeholder="Contraseña"
              name="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "35px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button positive disabled={loading} type="submit">
            {exist ? "Actualizar Contraseña" : "Buscar"}
          </Button>
          <Menu text>
            <Menu.Item name="Volver" onClick={() => onBack()} />
          </Menu>
        </div>
      </form>
    </div>
  );
}
