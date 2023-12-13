import Header from "@/components/Header";
import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

const HomeContainer = ({ children }) => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        {children}
      </main>
    </Provider>
  );
};

export default HomeContainer;
