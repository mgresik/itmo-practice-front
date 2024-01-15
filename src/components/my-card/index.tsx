import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Node } from "reactflow";

export default function MyCard(props: Node) {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Термин №{props.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.data.label}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Определение:
                </Typography>
                <Typography variant="body2">{props.data.desc}</Typography>
            </CardContent>
        </Card>
    );
}
