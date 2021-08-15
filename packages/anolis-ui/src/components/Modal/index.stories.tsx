import React, { FC } from "react";
import SketchLayout from "sketch/SketchLayout";

import { Modal, useModal } from ".";

export default {
  title: "Themed/Modal"
};

export const Normal: FC = () => {
  return (
    <SketchLayout title="Modal">
      <Modal title="Modal title">
        Text text text
      </Modal>
    </SketchLayout>
  );
};

export const WithModalContext: FC = () => {
  return (
    <SketchLayout>
      <InnerWithModalContext />
    </SketchLayout>
  );
};

const InnerWithModalContext: FC = () => {
  const [open] = useModal(CustomModal);
  return (
    <>
      <button onClick={open}>Open modal</button>
    </>
  );
};

const CustomModal: FC = () => {
  return <Modal>Content</Modal>;
};
