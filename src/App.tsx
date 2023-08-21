import React from "react";
import { Main, SectionNextDecision, SectionMultiply, SectionAuthor } from "./components/index";

function App() : React.ReactElement {
    return (
        <div className="">
            <Main/>
            <SectionNextDecision/>
            <SectionMultiply/>
            <SectionAuthor/>
        </div>
    );
}

export default App;
