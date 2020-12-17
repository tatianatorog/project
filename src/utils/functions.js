
const capitalizeFirstLetter= (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formattingDate= (date)=> date.slice(0, 10).replaceAll("-", "/")
  
 const getNameLanguage= (language) => {
    let profileLanguage;
    switch (language) {
      case "zh":
        profileLanguage = "Chinese";
        break;
      case "it":
        profileLanguage = "Italian";
        break;
      case "en":
        profileLanguage = "English";
        break;
      case "es":
        profileLanguage = "Spanish";
        break;
      case "fr":
        profileLanguage = "French";
        break;
        case "de":
        profileLanguage = "German";
        break;
      default:
        profileLanguage = "English";
    }
    return profileLanguage;
  }


  

  export {capitalizeFirstLetter, formattingDate, getNameLanguage}
  





