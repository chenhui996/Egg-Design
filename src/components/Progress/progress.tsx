import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
  percent: number;
  storkeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, storkeHeight, showText, styles, theme } = props;
  return (
    <div className="egg-progress-bar" style={styles}>
      <div
        className="egg-progress-bar-outer"
        style={{ height: `${storkeHeight}px` }}
      >
        <div
          className={`egg-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
            {showText && <span className="inner-text">{percent}%</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  storkeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
