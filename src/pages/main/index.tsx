import ListTerms from "../../components/list-terms";
import Header from "../../components/header";
import "./style.css";

export default function MainPage() {
    return (
        <div className="main-page">
            <Header />
            <div className="main-content">
                <div className="main-desc">
                    Анализ инструментов для организации и проведения научных
                    исследований в веб-среде
                </div>
                <div className="main-title">Глоссарий терминов ВКР</div>

                <ListTerms />
            </div>
        </div>
    );
}
