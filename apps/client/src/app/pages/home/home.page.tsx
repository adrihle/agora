import { Button } from "antd";
import { HomeService } from "./home.service";

export const HomePage: React.FC = () => {

    const onClick = async () => {
        const resp = await HomeService.get();
        console.log({resp})
    }

    const onClickPost = async () => {
        const resp = await HomeService.post();
        console.log({resp})
    }

    return (
        <section>
            <h1>home page</h1>
            <Button onClick={onClick}>get</Button>
            <Button onClick={onClickPost}>post</Button>
        </section>
    )
}