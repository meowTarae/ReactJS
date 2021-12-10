// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    darkMode: {
      bgColor: string;
      textColor: string;
      accentColor: string;
    };
    lightMode: {
      bgColor: string;
      textColor: string;
      accentColor: string;
    };
  }
}
