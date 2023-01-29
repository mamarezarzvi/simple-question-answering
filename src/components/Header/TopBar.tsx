import { Plus } from "../../assets/icons/Plus";
import { strings } from "../../utils/strings";
import { Button } from "../Button/Button";
import { FontWeight, Text1 } from "../Typography/Text";
import { ProfileBar } from "./Profile/ProfileBar";
import styles from "./TopBar.module.scss";

export const TopBar: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <Text1 fontWeight={FontWeight.bold}>{strings.title}</Text1>
      <div className={styles["action-wrapper"]}>
        <Button icon={<Plus />}>{strings.newQuestion}</Button>
        <ProfileBar />
      </div>
    </header>
  );
};
