import { ArrowDown } from "../../../assets/icons/ArrowDown";
import { strings } from "../../../utils/strings";
import { FontWeight, Text3 } from "../../Typography/Text";
import styles from "./ProfileBar.module.scss";
export const ProfileBar: React.FC = () => {
  return (
    <div className={styles["profile-bar"]}>
      <img src="/icons/profile.png" alt="profile" />
      <Text3 fontWeight={FontWeight.medium}>{strings.username}</Text3>
      <ArrowDown />
    </div>
  );
};
