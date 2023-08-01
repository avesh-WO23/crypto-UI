import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';

import BalanceBanner from 'components/classifier/banner/BalanceBanner';
import Categories from 'components/classifier/categories/Categories';
import Location from 'components/classifier/locations/Location';
import CustomButton from 'components/common/buttons/CustomButton';
import AlertDialog from 'components/common/dialog/AlertDialog';
import HookTextField from 'components/common/HookTextField';
import MobileHeader from 'components/header/MobileHeader';
import WalletSkeleton from 'components/skeleton/WalletSkeleton';

const reportBtnSx = {
  position: 'fixed',
  bottom: '48px',
  right: '16px',
  px: 2.2,
  py: 1.2,
  borderRadius: 10,
  backgroundColor: (theme) => theme.palette.primary.main,
  boxShadow: '0px 8px 24px 0px rgba(0, 100, 204, 0.32)',
};

const Wallet = () => {
  const [isDialog, setDialog] = useState(false);
  const [formValues] = useState({
    caseId: '',
  });

  const { control, watch } = useForm({
    defaultValues: formValues,
    mode: 'onTouched',
  });

  const caseId = watch('caseId');

  const handleSave = () => {
    setDialog(false);
  };

  const isLoading = false;
  return (
    <Box pb={12}>
      <MobileHeader />
      {isLoading ? (
        <WalletSkeleton />
      ) : (
        <>
          <BalanceBanner
            balance={{
              id: 1,
              status: 'Medium',
              amount: 802,
              currency: '$',
            }}
          />
          <Location />
          <Divider />
          <Categories />
          <CustomButton
            variant={'contained'}
            startIcon={<DescriptionIcon />}
            sx={reportBtnSx}
            onClick={() => setDialog(true)}
          >
            Generate Report
          </CustomButton>
          <AlertDialog
            open={isDialog}
            title={
              <Box display={'flex'} justifyContent={'space-between'}>
                <Typography variant="span">Add Case ID (optional)</Typography>
                <CloseIcon onClick={() => setDialog(false)} />
              </Box>
            }
            description={
              <Box pt={1}>
                <HookTextField
                  control={control}
                  name="caseId"
                  label={'Case ID'}
                  size="small"
                />
              </Box>
            }
            cancelBtnText="Skip"
            submitBtnText="Save"
            disabled={!caseId}
            isLoading={false}
            handleClose={() => setDialog(false)}
            handleSubmit={handleSave}
            sx={{
              '& .MuiDialog-paper': {
                width: '85vw',
                position: 'absolute',
                top: 0,
                borderRadius: 2,
              },
            }}
          />
        </>
      )}
    </Box>
  );
};

export default Wallet;
