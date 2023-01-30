import { CreateQuestionModal } from "./CreateQuestion.modal";
import styles from "./shared.module.scss";

export const ModalWrapper: React.FC = () => {
  return (
    <div className={styles["wrapper"]}>
      <CreateQuestionModal />
    </div>
  );
};
