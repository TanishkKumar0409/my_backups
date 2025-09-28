declare module "../Data/UserData" {
  import { IconType } from "react-icons";

  export interface SocialLink {
    icon: IconType;
    href: string;
    label: string;
  }

  export interface UserDataType {
    name: string;
    role: string;
    bannerBio: string;
    socialLinks: SocialLink[];
  }

  const value: UserDataType;
  export default value;
}
