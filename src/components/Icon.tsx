import "./Icon.css";

interface IconProps {
  icon: string;
  direction: "left" | "right";
}

function Icon({ icon, direction }: IconProps) {
  return (
    <span className={`material-symbols-outlined icon ${direction}`}>
      {icon}
    </span>
  );
}

export default Icon;
