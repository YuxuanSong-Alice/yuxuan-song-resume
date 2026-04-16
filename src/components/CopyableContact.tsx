import React, { useState } from 'react';

interface CopyableContactProps {
  label: string;
  value: string;
}

const CopyableContact: React.FC<CopyableContactProps> = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="card text-center cursor-pointer hover:shadow-md transition-all" onClick={handleCopy}>
      <p className="text-gray-500 mb-2 font-semibold">{label}</p>
      <p className="text-blue-600 hover:text-blue-800 break-all font-medium text-sm">
        {value}
      </p>
      {copied && <p className="text-xs text-green-500 mt-2 transition-all">✓ 已复制</p>}
    </div>
  );
};

export default CopyableContact;
