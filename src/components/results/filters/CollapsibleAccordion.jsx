import React, { useCallback, useMemo } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { PropTypes } from 'prop-types';

const LOCATIONS = [
  { country: 'USA', states: ['Alabama', 'Georgia', 'Missisipi'] },
  { country: 'Colombia', states: ['Amazonas', 'Antioquia', 'Arauca'] },
  { country: 'India', states: ['Gujarat', 'Punjab', 'Maharashtra'] },
];

export default function CollapsibleAccordion({
  selectedLocation,
  setSelectedLocation,
}) {
  const isAllSelected = useMemo(() => {
    let allSelected = true;
    const allCountriesName = LOCATIONS.map((c) => c.country);
    for (let name of allCountriesName) {
      if (!selectedLocation?.isAll?.(name)) {
        allSelected = false;
        break;
      }
    }
    return allSelected;
  }, [selectedLocation]);

  const handleChange = (country, state) => (event) => {
    let newState = { ...selectedLocation };

    // If user select state
    if (state) {
      // if user change state and if there is not states selected for country then remove country
      if (
        selectedLocation?.[country]?.states.includes(state) &&
        selectedLocation?.[country]?.states.filter((e) => e !== state)
          ?.length === 0
      ) {
        delete newState[country];
      } else {
        newState = {
          ...newState,
          [country]: {
            states: selectedLocation?.[country]?.states.includes(state)
              ? selectedLocation?.[country]?.states.filter((e) => e !== state)
              : selectedLocation?.[country]?.states?.length > 0
              ? [...(selectedLocation?.[country]?.states || []), state]
              : [state],
          },
        };
      }
    } else {
      const isAlreadyInList =
        [country] in selectedLocation && selectedLocation?.isAll?.(country);

      // if country already in object then delete
      if (isAlreadyInList) {
        delete newState[country];
      } else {
        newState = {
          ...newState,
          [country]: {
            states: LOCATIONS.find((c) => c.country === country)?.states,
          },
        };
      }
    }

    setSelectedLocation((prev) => ({
      isAll: prev.isAll,
      isPartial: prev.isPartial,
      ...newState,
    }));
  };

  const handleAllCountry = (country) => (event) => {
    if (country === 'All') {
      setSelectedLocation((prev) => {
        let countries = {};
        if (!isAllSelected) {
          LOCATIONS.map((c) => (countries[c.country] = { states: c.states }));
        }
        return {
          isAll: prev.isAll,
          isPartial: prev.isPartial,
          ...countries,
        };
      });
    }
  };

  const getStateChecked = useCallback(
    (country, state) => {
      return !!selectedLocation?.[country]?.states?.includes(state);
    },
    [selectedLocation]
  );

  return (
    <Box pt={1}>
      <FormControlLabel
        label={'All'}
        control={
          <Checkbox
            checked={isAllSelected}
            onChange={handleAllCountry('All')}
          />
        }
      />
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
              sx={{
                'minHeight': 0,
                'px': 0,
                '& .MuiAccordionSummary-content': { margin: 0 },
              }}
            >
              <FormControlLabel
                label={location.country}
                control={
                  <Checkbox
                    checked={selectedLocation?.isAll?.(location.country)}
                    indeterminate={selectedLocation?.isPartial?.(
                      location.country
                    )}
                    onChange={handleChange(location.country)}
                    onClick={(e) => e.stopPropagation()}
                  />
                }
              />
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
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
                          checked={getStateChecked(location.country, state)}
                          onChange={handleChange(location.country, state)}
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

CollapsibleAccordion.propTypes = {
  selectedLocation: PropTypes.object,
  setSelectedLocation: PropTypes.func,
};
