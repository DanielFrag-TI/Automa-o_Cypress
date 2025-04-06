// Elements da pagina Home
export const HOME_ELEMENTS = {
    BTN_AUTOMOBILE: '#nav_automobile',
    SELECT_INSURANCE: '.breadcrumbs',
}


// IDS das abas do forms
export const ABA_IDS = {
    VEHICLE: '#entervehicledata',
    INSURANT: '#enterinsurantdata',
    PRODUCT: '#enterproductdata',
    PRICE: '#selectpriceoption',
    QUOTE: '#sendquote',
  };


// Elements da aba Vehicle DATA do formulario
export const VEHICLE_ELEMENTS = {
    CAR_MAKER: '#make',
    INPUT_ENGINE_PERFORMANCE: '#engineperformance',
    INPUT_DATE_MANUFACTURE: '#dateofmanufacture',
    SELECT_NUMBER_SEATS: '#numberofseats',
    SELECT_FUEL_TYPE: '#fuel',
    INPUT_LIST_PRICE: '#listprice',
    INPUT_ANNUAL_MILEAGE: '#annualmileage',
    BTN_NEXT: '#nextenterinsurantdata'
  }


// Elements da aba Insurant DATA do formulario
export const INSURANT_ELEMENTS = {
    FIRST_NAME: '#firstname',
    LAST_NAME: '#lastname',
    DATE_BIRTH: '#birthdate',
    IDS_GENDERS: ['#gendermale', '#genderfemale'],
    STREET_ADDRESS: '#streetaddress',
    COUNTRY: '#country',
    ZIP_CODE: '#zipcode',
    CITY: '#city',
    OCCUPATION: '#occupation',
    IDS_HOBBIESELECTOR: ['#speeding', '#bungeejumping', '#cliffdiving', '#skydiving', '#other'],
    WEBSITE: '#website',
    PICTURE_CONTAINER: '#picturecontainer',
    BTN_NEXT: '#nextenterproductdata'
  }


 // Elements da aba Product DATA do formulario
 export const PRODUCT_ELEMENTS = {
    INPUT_FUTURE_DATE: '#startdate',
    SELECT_INSURANCE_SUM: '#insurancesum',
    SELECT_MERIT_RATING: '#meritrating',
    SELECT_DAMAGE_INSURANCE: '#damageinsurance',
    IDS_OPTIONAL_PRODUCTS: ['#EuroProtection', '#LegalDefenseInsurance'],
    SELECT_COURTESY_CAR: '#courtesycar',
    BTN_NEXT: '#nextselectpriceoption'
  } 


// Elements da aba Select Price do formulario
export const PRICE_ELEMENTS = {
    IDS_PRICE_OPTIONS: ['#selectsilver', '#selectgold', '#selectplatinum', '#selectultimate'],
    BTN_NEXT: "#nextsendquote"
  }

  
// Elements da aba Send Quote do formulario

export const SEND_QUOTE_ELEMENTS = {
    EMAIL: '#email',
    PHONE: '#phone',
    USERNAME: '#username',
    PASSWORD: '#password',
    CONFIRM_PASSWORD: '#confirmpassword',
    COMMENTS: '#Comments',
    SEND_BUTTON: '#sendemail',
    FINAL_ALERT: '.sweet-alert',
    LOADING_PDF: '#LoadingPDF'
  }
  


  