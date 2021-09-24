import {FC, useEffect, useState} from "react";
import {Locale} from "./types/LanguageType";
import {BrandLocalization} from "./types/LocalizationDataType";
import {Section} from "./types/HeaderType";

type LocalizationEditorProps = {
   locales: Locale[]
}

export const LocalizationEditor: FC<LocalizationEditorProps> = ({locales}) => {
   const [localizations, setLocalizations] = useState<BrandLocalization[]|undefined>();
   const [headers, setHuaders] = useState<Section[]|undefined>();

   useEffect(() => {
      // Fetch headers from
      // https://lively-plant-00cc78403.azurestaticapps.net/locheaders.json
   }, []) // todo set correct dependencies

   useEffect(() => {
      // Fetch data from
      // The local json file (this will be replaced by graphql queries)
   }, []) // todo set correct dependencies

   return <div>Editor</div>
}