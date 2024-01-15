import { useEffect, useState } from "react";
import ReactFlow, { MiniMap, Node, Edge, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { useLoadEdgesQuery, useLoadTermsQuery } from "../../store/api";

export default function MindMap() {
    const [terms, setTerms] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const { data: initialTerms } = useLoadTermsQuery();
    const { data: initialEdges } = useLoadEdgesQuery();

    useEffect(() => {
        if (initialTerms) {
            setTerms(initialTerms);
        }
    }, [initialTerms]);

    useEffect(() => {
        if (initialEdges) {
            setEdges(initialEdges);
        }
    }, [initialEdges]);

    return (
        terms &&
        edges && (
            <ReactFlow nodes={terms} edges={edges} fitView>
                <MiniMap />
                <Controls />
            </ReactFlow>
        )
    );
}
