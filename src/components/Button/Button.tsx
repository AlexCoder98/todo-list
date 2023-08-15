import { TodoType } from "../../types/todo";

type Icon = React.ReactNode;

interface ButtonProps {
    className?: string | null;
    content: string | Icon;
    title: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void | ((id: string, list: TodoType[]) => void) | ((id: string) => void);
}

const Button = ({ className, content, title, type, onClick }: ButtonProps) => {
    return (
        <button
            className={className!}
            onClick={onClick}
            title={title}
            type={type}
        >
            {content}
        </button>
    )
}

export default Button;