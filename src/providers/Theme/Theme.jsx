import backgroundLight from '../../img/LightTheme.png';
import backgroundDark from '../../img/DarkTheme.png';

const theme = {
  light: {
    backgroundImage: backgroundLight,
    mainColor: '#b32b2b',
    color: 'white',
    txtColor: 'black',
    Header: {
      color: 'white',
      boxShadow:
        '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      backgroundButton: 'bg-grey-400',
      DarkMode: {
        color: '#fafafa',
      },
      Login: {
        backgroundColor: '#bdbdbd',
      },
      Search: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        placeholder: 'rgba(255, 255, 255, 0.3)',
      },
    },
    VideoCard: {
      color: 'rgba(0, 0, 0, 0.54)',
      backgroundColor: '#ffffff',
      boxShadow:
        '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
  },
  dark: {
    mainColor: '#4cd4d4',
    backgroundImage: backgroundDark,
    color: 'black',
    txtColor: 'white',
    Header: {
      color: 'black',
      boxShadow:
        '0px 2px 4px -1px rgb(255 255 255 / 50%), 0px 4px 5px 0px rgb(255 255 255 / 25%), 0px 1px 10px 0px rgb(255 255 255 / 50%)',
      fontColor: 'text-gray-50',
      DarkMode: {
        color: '#050505',
      },
      Login: {
        backgroundColor: '#777777',
      },
      Search: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        placeholder: 'rgba(0, 0, 0, 0.3)',
      },
    },
    VideoCard: {
      color: 'rgba(255, 255, 255, 0.54)',
      backgroundColor: '#e0e0e0',
      boxShadow:
        '0px 2px 4px -1px rgb(255 255 255 / 20%), 0px 4px 5px 0px rgb(255 255 255 / 14%), 0px 1px 10px 0px rgb(255 255 255 / 12%)',
    },
  },
};

export default theme;
