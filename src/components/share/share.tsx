import { FC, FormEventHandler, useContext, useEffect, useState } from 'react';

import { sendUrlByEmail } from 'api/share/service';

import { Button } from 'components/button';
import { Modal } from 'components/modal';
import { TextField } from 'components/text-field';
import { ToastContext } from 'components/toast/context/toastContext';

import { emailValidate } from 'helpers/validation';

import { ShareContext } from './context/shareContext';
import { StyledShare, ShareForm, ShareDescription } from './share.styled';

const emailTextError =
  'Invalid email. Please check the email address and try again.';

export const Share: FC = () => {
  const [email, setEmail] = useState('');
  const [errorMail, setErrorMail] = useState(false);
  const { shareData, setShareData } = useContext(ShareContext);
  const { setToastData } = useContext(ToastContext);

  const handleShare: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (emailValidate(email)) {
      sendUrlByEmail(email, shareData.url).then(() => {
        setToastData({
          show: true,
          severity: 'success',
          text: 'URL shared successfully!',
        });
        setShareData((prev) => ({ ...prev, show: false }));
      });
    } else {
      setToastData({
        show: true,
        severity: 'error',
        text: emailTextError,
      });
      setErrorMail(true);
    }
  };

  useEffect(() => {
    setErrorMail(false);
  }, [shareData.show, email]);

  useEffect(() => {
    setEmail('');
  }, [shareData.show]);

  const handleClose = (show: boolean) => {
    setShareData((prev) => ({ ...prev, show }));
  };

  return (
    <StyledShare>
      <Modal title="Share by email" onClose={handleClose} show={shareData.show}>
        <ShareDescription error={errorMail}>
          {errorMail
            ? emailTextError
            : 'Fill in the email you will receive the share'}
        </ShareDescription>
        <ShareForm onSubmit={handleShare}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errorMail}
          />
          <Button size="large">Send</Button>
        </ShareForm>
      </Modal>
    </StyledShare>
  );
};
