import React from 'react';

import { Box, Button, styled } from '@mui/material';
import { useDispatch } from 'react-redux';

import BackButton from '../components/common/buttons/BackButton';
import OutlineButton from '../components/common/buttons/OutlineButton';
import { Container } from '../components/common/Container';
import SearchedResults from '../components/results/SearchedResults';
import { content } from '../static/backwardSection';
import { filterActions } from '../store/filter-drawer/filterSlice';

const HelpButton = styled(Button)(({ path }) => ({
  backgroundImage: `url(${path})`,
  backgroundRepeat: 'no-repeat',
  height: '24px',
  width: '24px',
  minWidth: '24px',
}));

const ButtonBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
});

const IconSpan = styled('span')(({ path }) => ({
  backgroundImage: `url(${path})`,
  backgroundRepeat: 'no-repeat',
  width: '24px',
  height: '24px',
  backgroundSize: '24px',
  backgroundPosition: 'left center',
  padding: '8px 14px',
}));

const Filters = styled(Box)({ display: 'flex', gap: '8px' });

const Results = () => {
  const { filterButtons, helpButton } = content;
  const dispatch = useDispatch();
  const { toggleDrawer } = filterActions;
  return (
    <>
      <Container
        sx={{
          backgroundColor: '#F1F4F6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <BackButton />
        <ButtonBox>
          <Filters>
            {filterButtons.map((btn, i) => (
              <OutlineButton
                key={`${btn.text}-${i}`}
                onClick={() => dispatch(toggleDrawer(true))}
              >
                <IconSpan path={btn.icon} />
                {btn.text}
              </OutlineButton>
            ))}
          </Filters>
          <HelpButton path={helpButton} />
        </ButtonBox>
      </Container>
      <SearchedResults />
    </>
  );
};

export default Results;
