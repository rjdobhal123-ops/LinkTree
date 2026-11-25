import { Suspense } from "react";
import Generate from "./Generate";

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Generate />
        </Suspense>
    );
};

export default Page;