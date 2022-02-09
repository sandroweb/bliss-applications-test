import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getHealthStatus } from 'api/health-check/service';

import { Button } from 'components/button';
import { Loading } from 'components/loading';
import { Modal } from 'components/modal';

export const HealthCheck: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [serverStatus, setServerStatus] = useState<boolean>();
  const [loading, setLoading] = useState(true);

  const handleCheckStatus = () => {
    setLoading(true);
    getHealthStatus().then((res) => {
      setServerStatus(res.data.status === 'OK');
      setLoading(false);
    });
  };

  useEffect(() => {
    setTimeout(handleCheckStatus, 1000);
    setInterval(handleCheckStatus, 60000);
  }, []);

  useEffect(() => {
    if (serverStatus && location.pathname === '/') {
      navigate('/questions');
    }
  }, [location.pathname, navigate, serverStatus]);

  return (
    <Modal title="Checking Server status" show={!serverStatus}>
      <Loading show={loading} />
      {serverStatus === false && (
        <Button color="primary" onClick={handleCheckStatus}>
          Try Again
        </Button>
      )}
    </Modal>
  );
};
