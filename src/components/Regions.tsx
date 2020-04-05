import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { regions } from "../data/regions";
import { InputLabel, FormControl } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  onChange: (regionId: string) => void;
}

const Regions: React.FC<Props> = ({ onChange }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: any) => {
    setSelected(event.target.value);
    onChange(event.target.value);
  };

  const Form = styled(FormControl)`
    min-width: 200px;
  `;

  return (
    <Form>
      <InputLabel htmlFor="age-native-simple">Välj region</InputLabel>
      <Select
        native
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        onChange={handleChange}
        style={{ color: "black" }}
      >
        <option aria-label="None" value="" />
        {regions.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </Select>
    </Form>
  );
};

export default Regions;
