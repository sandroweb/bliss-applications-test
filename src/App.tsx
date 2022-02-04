import { HealthCheck } from 'components/health-check';
import { ThemeProvider } from 'components/theme-provider';

import 'normalize.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HealthCheck />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        deleniti quos dolores cum fugiat accusamus nihil, consequatur possimus
        impedit, sunt dicta? Iure deleniti eum facere reiciendis, nisi adipisci
        vel aliquam!
      </ThemeProvider>
    </div>
  );
}

export default App;
