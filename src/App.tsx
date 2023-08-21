import React from "react";
import { Main, SectionNextDecision, SectionMultiply, SectionAuthor, SectionStatistic, SectionSubscribe } from "./components/index";

function App() : React.ReactElement {
    return (
        <div className="">
            <Main/>
            <SectionNextDecision/>
            <SectionMultiply/>
            <SectionAuthor/>
            <SectionStatistic/>
            <SectionSubscribe/>
        </div>
    );
}

export default App;
