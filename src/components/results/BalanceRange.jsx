import {
  InputAdornment,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";
import { SectionHeading } from "../common/styled/SectionHeading";

const InputRange = styled(OutlinedInput)({
  "& .MuiOutlinedInput-input.MuiInputBase-inputAdornedStart": {
    padding: "8px",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function BalanceRange() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  return (
    <Box>
      <SectionHeading>Balance Range</SectionHeading>
      <Box sx={{ display: "flex", paddingTop: "24px", gap: "22px" }}>
        {value.map((val, i) => {
          return (
            <InputRange
              id="outlined-adornment-amount"
              key={`${val}-${i}`}
              value={val}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          );
        })}
      </Box>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
