import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {
    const memox = useMemo(() => {
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        return null;
    }, []);
    return (
        <div>LeftBranch

            <LeftBranchA/>
        </div>
    );
};