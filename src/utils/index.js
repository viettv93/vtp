import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
const fonts ={
    beauSanProRegular: 'FS PFBeauSansPro-Regular',
    beauSanProItalic: 'FS PFBeauSansPro-Italic',
    beauSanProBold: 'FS PFBeauSansPro-Bold',
}
const color={
    white: '#FFFFFF',
    black: '#000000',
    blue: '#0172FF', 
    red: '#EE0435',
    yellow: '#F4AF38',
    gray: '#EEEEEE'
}
const fontSize={
    fontSite13:RFPercentage(2),
    fontSite14: RFPercentage(2.1538),
    fontSite15:RFPercentage(2.3076),
    fontSite16:RFPercentage(2.46153),
    fontSite17:RFPercentage(2.61538),
    fontSite18:RFPercentage(2.76923),
    fontSite20:RFPercentage(3.0769)
}
export {fonts, color, fontSize}