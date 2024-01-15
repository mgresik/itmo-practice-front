import { Node } from "reactflow";
import { useLoadTermsQuery } from "../../store/api";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MyCard from "../my-card";

export default function ListTerms() {
    const { data: initialTerms } = useLoadTermsQuery();
    const [terms, setTerms] = useState<Node[]>();

    useEffect(() => {
        if (initialTerms) {
            setTerms(initialTerms);
        }
    }, [initialTerms]);

    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "25px",
                bgcolor: "background.paper",
                width: "100%",
            }}
        >
            {terms && terms.map((term) => <MyCard key={term.id} {...term} />)}
        </Box>
    );
}
