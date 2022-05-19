import { Button } from "antd"
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./floating-button.styles";

export const FloatingButtonComponent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Button 
                type="primary"
                shape="circle"
                size='large'
                onClick={() => navigate('/post')}
            >
                +
            </Button>
        </Wrapper>
    )
}