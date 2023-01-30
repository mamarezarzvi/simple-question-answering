import { strings } from "../../utils/strings";
import { FontWeight, Text4 } from "../Typography/Text";
import styles from "./DateTime.module.scss";
import textStyles from "../Typography/TextColors.module.scss";

export const DateTime: React.FC<{ date: string }> = (props) => {
  const dateTime = new Date(parseInt(props.date))
    .toLocaleString("fa-IR")
    .split("،");
  const date = dateTime[0];
  const time = dateTime[1];

  return (
    <div className={styles["wrapper"]}>
      <Text4 className={textStyles["gray-dark-text"]}>
        {strings.timeTitle}:
      </Text4>
      &nbsp;
      <Text4 fontWeight={FontWeight.medium}>{time}</Text4>
      <div className={styles["divider"]} />
      <Text4 className={textStyles["gray-dark-text"]}>
        {strings.dateTitle}:
      </Text4>
      &nbsp;
      <Text4 fontWeight={FontWeight.medium}>{date}</Text4>
    </div>
  );
};
