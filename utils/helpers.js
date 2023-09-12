import { translations } from "../components/PrivacyPolicyContent/translations.js";

export const getPolicyRoutes = () => {
  const languagesList = Object.keys(translations);
  const paths = [];

  languagesList.forEach((language) => {
    paths.push(`/${language}/privacy-policy`)
  })

  return paths
}
