import PhonesHolder from "./Containers/PhonesHolder/PhonesHolder";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTimesCircle);

const App = () => {
  return (
    <div className="App">
      <PhonesHolder />
    </div>
  );
};

export default App;
