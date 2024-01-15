import { Container, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { AppRouter } from "../../consts";
import Header from "../../components/header";

export default function Page404() {
    return (
        <Container>
            <Header />
            <Typography
                variant="h5"
                component="h2"
                align="center"
                padding={"100px"}
            >
                Такой страницы не существует!
            </Typography>
            {/* <Link to={AppRouter.Main}>
                <Typography variant="h6" component="h2" align="center">
                    Вернуться на главную
                </Typography>
            </Link> */}
        </Container>
    );
}
