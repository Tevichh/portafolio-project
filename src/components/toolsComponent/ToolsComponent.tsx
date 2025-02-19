import { ToolCard } from "./ToolCard";
import "./toolsComponent.css";
export const ToolsComponent = () => {
    return (
        <div className="toolsComponent container">
            <h2 className="tools-title">TOOLS</h2>
            <div className="tools row">
                <ToolCard icon="https://img.icons8.com/color/48/000000/html-5--v1.png" altText="html" name="HTML" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/css3.png" altText="css" name="CSS" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/javascript--v1.png" altText="js" name="JavaScript" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/react-native.png" altText="react" name="React" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/typescript.png" altText="typescript" name="TypeScript" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/nodejs.png" altText="node" name="Node.js" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/mongodb.png" altText="mongo" name="MongoDB" />
                <ToolCard icon="https://img.icons8.com/color/48/000000/git.png" altText="git" name="Git" />
            </div>
        </div>
    )
}
