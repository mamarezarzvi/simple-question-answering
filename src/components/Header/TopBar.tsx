import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus } from "../../assets/icons/Plus";
import { ModalActions } from "../../modals/modals";
import { RootState } from "../../store";
import { strings } from "../../utils/strings";
import { Button } from "../Button/Button";
import { FontWeight, Text1 } from "../Typography/Text";
import { ProfileBar } from "./Profile/ProfileBar";
import styles from "./TopBar.module.scss";

export const TopBar: React.FC = () => {
  const dispatch = useDispatch();
  const isInSelectedMode = useSelector(
    (state: RootState) => state.questionsState.selectedQuestionId != null
  );
  const openQuestionModal = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(ModalActions.openModal());
  }, []);

  return (
    <header className={styles["header"]}>
      <Text1 fontWeight={FontWeight.bold}>
        {isInSelectedMode ? strings.questionDetail : strings.title}
      </Text1>
      <div className={styles["action-wrapper"]}>
        <Button onClick={openQuestionModal} icon={<Plus />}>
          {strings.newQuestion}{" "}
        </Button>
        <ProfileBar />
      </div>
    </header>
  );
};
