interface ToolCardProps {
    icon: string;
    altText: string;
    name: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon, altText, name }) => {
    return (
        <div className="tool col-md-2">
            <img src={icon} alt={altText} />
            <p>{name}</p>
        </div>
    );
};

