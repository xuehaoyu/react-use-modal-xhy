# react-use-modal-xhy

## 安装

使用 yarn

```
$ yarn add react-use-modal-xhy
```

或者用 npm

```
$ npm install react-use-modal-xhy --save
```

## 使用

将 `ModalProvider` 放在组件外层

```js
import ReactDOM from "react-dom";
import { ModalProvider } from "react-use-modal";

ReactDOM.render(
  <ModalProvider>...</ModalProvider>,
  document.querySelector("#root")
);
```

调用方式，以 antd 举例

使用 hooks

```js
import React from "react";
import { Modal } from "antd";
import { useModal } from "react-use-modal-xhy";

const App = () => {
  const { showModal, closeModal } = useModal();

  function handleClick() {
    showModal(({ id }) => (
      <Modal
        onCancel={() => {
          closeModal(id);
        }}
      >
        Modal body text goes here.
      </Modal>
    ));
  }

  return <button onClick={handleClick}>modal</button>;
};
```