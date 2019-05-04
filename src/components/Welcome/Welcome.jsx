import React from "react";
import { Button } from "@material-ui/core";

const Welcome = () => (
  <>
    <form>
      <div className="form-group">
        <label>Tell me your name</label>
        <input required placeholder="Name"/>
      </div>
      <div>
        <Button variant="contained" color="primary">OK</Button>
      </div>
    </form>
  </>
);

export default Welcome;
