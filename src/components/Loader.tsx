import type { ReactElement } from "react";

interface ILoaderProps {
  small?: true;
}

function Loader({ small }: ILoaderProps): ReactElement {
  return (
    <div className={`loader-wrapper ${small ? "small" : ""}`}>
      <div className="loader" />
    </div>
  );
}

export default Loader;
