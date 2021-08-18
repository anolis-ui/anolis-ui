import { FC } from "react";
import { sketch, SketchLayout } from "sketch";

import { Modal, useModal } from ".";

const Normal = sketch(() => {
  return (
    <SketchLayout title="Modal">
      <Modal title="Modal title">
        Text text text
      </Modal>
    </SketchLayout>
  );
});

export default Normal;

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
