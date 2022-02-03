import { FC, useEffect, useState } from 'react';

import { getHealthStatus } from 'api/health-check/service';

export const HealthCheck: FC = () => {
  const [serverStatus, setServerStatus] = useState(false);

  useEffect(() => {
    getHealthStatus().then((res) => {
      setServerStatus(res.data.status === 'OK');
    });
  }, []);

  return !serverStatus ? <div>HealthCheck</div> : null;
};
