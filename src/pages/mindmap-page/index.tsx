import MindMap from "../../components/mindmap";
import Header from "../../components/header";
import "./style.css";

export default function MindMapPage() {
    return (
        <div className="mindmap-page">
            <Header />

            <div className="mindmap-content">
                <MindMap />
            </div>
        </div>
    );
}
