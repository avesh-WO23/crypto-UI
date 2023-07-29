import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const LOCATIONS = [
  { country: 'All' },
  { country: 'USA', states: ['Alabama', 'Georgia', 'Missisipi'] },
  { country: 'Colombia', states: ['Amazonas', 'Antioquia', 'Arauca'] },
];

export default function CollapsibleAccordion() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <Box pt={1}>
      {LOCATIONS.map((location, ind) => {
        return (
          <Accordion
            disableGutters
            key={ind}
            sx={{
              'boxShadow': 'none',
              '&::before': { backgroundColor: 'transparent' },
            }}
          >
            <AccordionSummary
              expandIcon={location.states ? <ExpandMoreIcon /> : <></>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                'minHeight': 0,
                '& .MuiAccordionSummary-content': { margin: 0 },
              }}
            >
              <FormControlLabel
                label={location.country}
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />
            </AccordionSummary>
            <AccordionDetails
              sx={{
                'padding': 0,
                '& .MuiBox-root': { marginLeft: 4 },
              }}
            >
              {location.states ? (
                location.states.map((state, i) => (
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    ml={3}
                    key={`${state}-${i}`}
                  >
                    <FormControlLabel
                      label={state}
                      control={
                        <Checkbox
                          checked={checked[0]}
                          onChange={handleChange1}
                        />
                      }
                    />
                  </Box>
                ))
              ) : (
                <></>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
