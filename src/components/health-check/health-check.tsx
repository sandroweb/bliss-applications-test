import { FC, useEffect, useState } from 'react';

import { getHealthStatus } from 'api/health-check/service';

import { Button } from 'components/button';
import { Card } from 'components/card';
import { Loading } from 'components/loading';

import { Container, Overlay, Title } from './health-check.styled';

export const HealthCheck: FC = () => {
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

  return !serverStatus ? (
    <>
      <Overlay />
      <Container>
        <Card>
          <Title>Checking Server status</Title>
          <Loading show={loading} />
          {serverStatus === false && (
            <Button color="primary" onClick={handleCheckStatus}>
              Try Again
            </Button>
          )}
        </Card>
      </Container>
    </>
  ) : null;
};
