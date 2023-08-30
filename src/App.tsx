import React from "react";
import {
    Main,
    SectionNextDecision,
    SectionMultiply,
    SectionAuthor,
    SectionStatistic,
    SectionSubscribe,
    SectionLogin,
    Footer,
} from "./components/index";

function App(): React.ReactElement {
    return (
        <div className="">
            <Main />
            <SectionNextDecision />
            <SectionMultiply />
            <SectionAuthor />
            <SectionStatistic />
            <SectionSubscribe />
            <SectionLogin />
            <Footer />
        </div>
    );
}

export default App;
