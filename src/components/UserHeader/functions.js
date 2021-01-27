const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formattingDate = (date) => date.slice(0, 10).replaceAll('-', '/')



export { capitalizeFirstLetter, formattingDate, }
