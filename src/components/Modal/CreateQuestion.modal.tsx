import clsx from "clsx";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Close } from "../../assets/icons/Close";
import { ModalActions } from "../../modals/modals";
import { QuestionsActions } from "../../questions/questions";
import { strings } from "../../utils/strings";
import { Button, ButtonVariant } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";
import { FontWeight, Text2, Text4 } from "../Typography/Text";
import styles from "./shared.module.scss";

export const CreateQuestionModal: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  const closeModal = useCallback(() => {
    dispatch(ModalActions.closeModal());
  }, []);

  const checkForTapOutClose = useCallback((event: any) => {
    if (modalRef.current?.contains(event.target)) return;
    closeModal();
  }, []);

  const titleChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      titleRef.current = event.currentTarget.value;
    },
    []
  );
  const descriptionChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      descriptionRef.current = event.currentTarget.value;
    },
    []
  );

  const submitQuestion = useCallback(() => {
    dispatch(
      QuestionsActions.addQuestion({
        answers: [],
        date: Date.now().toString(),
        description: descriptionRef.current,
        title: titleRef.current,
      })
    );
    dispatch(ModalActions.closeModal());
  }, []);

  useEffect(() => {
    document.addEventListener("click", checkForTapOutClose);
    return () => {
      document.removeEventListener("click", checkForTapOutClose);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      {...props}
      className={clsx(styles["create-question-container"], props.className)}
    >
      <div className={styles["header"]}>
        <Text2 fontWeight={FontWeight.bold}>{strings.createNewQuestion}</Text2>
        <Close onClick={closeModal} />
      </div>
      <div className={styles["main"]}>
        <Text4 fontWeight={FontWeight.medium}>{strings.subject}</Text4>
        <TextInput
          placeholder={strings.subjectPlaceholder}
          onChange={titleChangeHandler}
        />
        <Text4 fontWeight={FontWeight.medium}>
          {strings.questionTextTitle}
        </Text4>
        <TextInput
          multiline
          placeholder={strings.questionTextPlaceholder}
          onChange={descriptionChangeHandler}
        />
        <div className={styles["action-bar"]}>
          <Button variant={ButtonVariant.SimpleText} onClick={closeModal}>
            {strings.cancel}
          </Button>
          <Button onClick={submitQuestion}>{strings.createQuestion}</Button>
        </div>
      </div>
    </div>
  );
};
