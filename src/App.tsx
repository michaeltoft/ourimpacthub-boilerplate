import React from 'react';
import {LocalizationEditor} from "./editor/LocalizationEditor";
import {Locale} from "./editor/types/LanguageType";

function App() {
   return (
      <div className="App">
         <LocalizationEditor locales={[Locale.Da, Locale.En]}/>
      </div>
   );
}

export default App;
