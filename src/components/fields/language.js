// This array has the language information required for the selector

const languageList = [
  { value: 'zh', label: 'Chinese ' },
  { value: 'it', label: 'Italian ' },
  { value: 'en', label: 'English ' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
];

const getNameLanguage = (language) => {
  let profileLanguage;
  switch (language) {
    case 'zh':
      profileLanguage = 'Chinese';
      break;
    case 'it':
      profileLanguage = 'Italian';
      break;
    case 'en':
      profileLanguage = 'English';
      break;
    case 'es':
      profileLanguage = 'Spanish';
      break;
    case 'fr':
      profileLanguage = 'French';
      break;
    case 'de':
      profileLanguage = 'German';
      break;
    default:
      profileLanguage = 'English';
  }
  return profileLanguage;
}


export {languageList,getNameLanguage } 
