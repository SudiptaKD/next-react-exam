import React from 'react';

interface ControlPanelProps {
  onDownload: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onDownload }) => {
  return (
    <div className="control-panel">
      <button onClick={onDownload}>Download Design</button>
    </div>
  );
};

export default ControlPanel;
